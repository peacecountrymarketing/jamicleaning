import { useEffect, useRef } from "react";
import { CalendarCheck, Loader2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  useHousecallPro,
  HOUSECALL_BOOKING_URL,
} from "@/hooks/use-housecall-pro";

const logoAsset = { url: "/assets/logos/jami-logo-new.png" };
const PHONE_1 = "780-897-3077";

const Book = () => {
  const { ready, failed, openModal } = useHousecallPro();
  const openedRef = useRef(false);

  // Open the booking modal automatically as soon as the widget is ready.
  useEffect(() => {
    if (ready && !openedRef.current) {
      openedRef.current = true;
      openModal();
    }
  }, [ready, openModal]);

  return (
    <div className="min-h-screen bg-hero-gradient text-primary-foreground flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center py-16">
        <img
          src={logoAsset.url}
          alt="JAMI Cleaning Inc"
          className="mx-auto h-24 md:h-28 w-auto mb-8"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Online Booking</h1>
        <p className="text-lg text-primary-foreground/80 mb-8">
          Book your clean with JAMI Cleaning Inc. Your booking window opens
          automatically &mdash; just pick a time that works for you.
        </p>

        {failed ? (
          <div className="flex flex-col items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base"
            >
              <a
                href={HOUSECALL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarCheck className="mr-2 h-5 w-5" /> Open Online Booking
              </a>
            </Button>
            <a
              href={`tel:${PHONE_1}`}
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" /> Or call us at {PHONE_1}
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            {!ready && (
              <p className="flex items-center gap-2 text-primary-foreground/80">
                <Loader2 className="h-5 w-5 animate-spin" /> Loading online
                booking&hellip;
              </p>
            )}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
            >
              <a
                href={HOUSECALL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarCheck className="mr-2 h-4 w-4" /> Open the booking
                window
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
