import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { toast } from "sonner";

const HOUSECALL_TOKEN = "28a856a9a34b440c91b86efac15bf4f2";
const HOUSECALL_ORG = "Jami-Cleaning-Inc";
const HOUSECALL_SCRIPT_ID = "housecall-pro-booking-script";
const HOUSECALL_SCRIPT_URL = `https://online-booking.housecallpro.com/script.js?token=${HOUSECALL_TOKEN}&orgName=${HOUSECALL_ORG}`;

declare global {
  interface Window {
    HCPWidget?: {
      openModal: () => void;
    };
  }
}

type HousecallBookingButtonProps = ButtonProps & {
  label?: string;
};

const HousecallBookingButton = ({
  label = "Book Online",
  className,
  onClick,
  ...props
}: HousecallBookingButtonProps) => {
  const [scriptFailed, setScriptFailed] = useState(false);

  useEffect(() => {
    if (window.HCPWidget?.openModal) return;

    const existingScript = document.getElementById(HOUSECALL_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      const handleLoad = () => setScriptFailed(false);
      const handleError = () => setScriptFailed(true);
      existingScript.addEventListener("load", handleLoad);
      existingScript.addEventListener("error", handleError);
      return () => {
        existingScript.removeEventListener("load", handleLoad);
        existingScript.removeEventListener("error", handleError);
      };
    }

    const script = document.createElement("script");
    script.id = HOUSECALL_SCRIPT_ID;
    script.src = HOUSECALL_SCRIPT_URL;
    script.async = true;
    script.addEventListener("load", () => setScriptFailed(false));
    script.addEventListener("error", () => setScriptFailed(true));
    document.body.appendChild(script);
  }, []);

  const openBooking = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (window.HCPWidget?.openModal) {
      window.HCPWidget.openModal();
      return;
    }

    toast.error(scriptFailed ? "Online booking is temporarily unavailable." : "Online booking is still loading. Please try again.");
  };

  return (
    <Button
      type="button"
      data-token={HOUSECALL_TOKEN}
      data-orgname={HOUSECALL_ORG}
      className={className}
      onClick={openBooking}
      {...props}
    >
      <CalendarCheck className="h-4 w-4" />
      {label}
    </Button>
  );
};

export default HousecallBookingButton;