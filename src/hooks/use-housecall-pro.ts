import { useEffect, useState } from "react";

export const HOUSECALL_TOKEN = "28a856a9a34b440c91b86efac15bf4f2";
export const HOUSECALL_ORG = "Jami-Cleaning-Inc";

const HOUSECALL_SCRIPT_ID = "housecall-pro-booking-script";

/** Housecall Pro's hosted booking page — a direct, reliable fallback to the widget modal. */
export const HOUSECALL_BOOKING_URL = `https://book.housecallpro.com/book/${HOUSECALL_ORG}/${HOUSECALL_TOKEN}?v2=true`;

const HOUSECALL_SCRIPT_URL = `https://online-booking.housecallpro.com/script.js?token=${HOUSECALL_TOKEN}&orgName=${HOUSECALL_ORG}`;

declare global {
  interface Window {
    HCPWidget?: {
      openModal: () => void;
    };
  }
}

/**
 * Loads the Housecall Pro booking script once and tracks its readiness.
 * Returns `ready` once `window.HCPWidget.openModal` is available, and
 * `failed` if the script errors out or the widget never appears.
 */
export const useHousecallPro = () => {
  const [ready, setReady] = useState(() => !!window.HCPWidget?.openModal);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (window.HCPWidget?.openModal) {
      setReady(true);
      return;
    }

    const poll = setInterval(() => {
      if (window.HCPWidget?.openModal) setReady(true);
    }, 250);
    const timeout = setTimeout(() => {
      if (!window.HCPWidget?.openModal) setFailed(true);
    }, 10000);

    let script = document.getElementById(HOUSECALL_SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = HOUSECALL_SCRIPT_ID;
      script.src = HOUSECALL_SCRIPT_URL;
      script.async = true;
      document.body.appendChild(script);
    }
    const handleError = () => setFailed(true);
    script.addEventListener("error", handleError);

    return () => {
      clearInterval(poll);
      clearTimeout(timeout);
      script?.removeEventListener("error", handleError);
    };
  }, []);

  const openModal = () => {
    if (window.HCPWidget?.openModal) window.HCPWidget.openModal();
  };

  return { ready, failed, openModal };
};
