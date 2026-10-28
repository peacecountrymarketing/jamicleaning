import { type MouseEvent } from "react";
import { CalendarCheck } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { toast } from "sonner";
import {
  useHousecallPro,
  HOUSECALL_TOKEN,
  HOUSECALL_ORG,
} from "@/hooks/use-housecall-pro";

type HousecallBookingButtonProps = ButtonProps & {
  label?: string;
};

const HousecallBookingButton = ({
  label = "Book Online",
  className,
  onClick,
  ...props
}: HousecallBookingButtonProps) => {
  const { ready, failed, openModal } = useHousecallPro();

  const openBooking = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (ready || window.HCPWidget?.openModal) {
      openModal();
      return;
    }

    toast.error(failed ? "Online booking is temporarily unavailable." : "Online booking is still loading. Please try again.");
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
