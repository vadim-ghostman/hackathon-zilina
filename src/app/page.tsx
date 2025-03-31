"use client";

import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from "./actions";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null,
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_KEY!,
      ),
    });
    setSubscription(sub);
    const serializedSub = JSON.parse(JSON.stringify(sub));
    await subscribeUser(serializedSub);
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUser();
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message);
      setMessage("");
    }
  }

  if (!isSupported) {
    return <p className="text-center">Push notifications are not<br/>supported in this browser.</p>;
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <h3 className="font-bold text-2xl text-gray-300">Push Notifications</h3>
      {subscription ? (
        <div className="flex flex-col gap-2">
          <input
            className="border border-white rounded-md px-4 py-2"
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className="rounded-md border w-full border-[aqua] text-[aqua] px-4 py-2"
              onClick={sendTestNotification}
            >
              Send
            </button>
            <button
              className="rounded-md border w-full border-orange-600 text-orange-600 px-4 py-2"
              onClick={unsubscribeFromPush}
            >
              Unsubscribe
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-center">You are not subscribed<br/>to push notifications.</p>
          <button
            className="rounded-md border border-green-700 text-green-700 px-4 py-2"
            onClick={subscribeToPush}
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
}

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window));

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      <h3 className="font-bold text-2xl text-gray-300">Install App</h3>
      <button className="rounded-md border border-amber-800 text-amber-800 px-4 py-2">
        Add to Home Screen
      </button>
      {isIOS && (
        <p className="text-sm text-center text-gray-500">
          To install this app on your iOS device,<br/>
          tap the share button and then<br/>
          {"\"Add to Home Screen\""}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[400px] flex flex-col gap-10 items-center justify-center">
        <h1 className="font-bold text-3xl">Moje <span className="text-[goldenrod]">Kysuce</span></h1>
        <div className="flex flex-col gap-10 items-center">
          <PushNotificationManager />
          <InstallPrompt />
        </div>
      </div>
    </div>
  );
}
