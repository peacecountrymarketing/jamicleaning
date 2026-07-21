import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoAsset from "@/assets/logo.png.asset.json";
import logoFullAsset from "@/assets/logo-full.png.asset.json";

const PHONE_1 = "780-897-3077";
const PHONE_2 = "780-897-7444";
const EMAIL = "Accounting@jamicleaninginc.com";

const faqs = [
  {
    question: "What services does JAMI Cleaning Inc offer?",
    answer:
      "We offer residential cleaning, commercial cleaning, vehicle detailing, yard maintenance, lawn services, snow removal, and garbage cleanup throughout Grande Prairie and the surrounding area.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can request a quote by filling out the contact form on our website, calling us at 780-897-3077, or emailing Accounting@jamicleaninginc.com. We typically respond within one business day.",
  },
  {
    question: "Do you serve both homes and businesses?",
    answer:
      "Yes. We clean houses, apartments, offices, retail spaces, and other commercial properties. Our team is trained to handle different environments with the right products and standards.",
  },
  {
    question: "What is your re-cleaning guarantee?",
    answer:
      "If you are not satisfied with the work, let us know within 24 hours and we will return to re-clean the area at no extra charge.",
  },
  {
    question: "Are you licensed, bonded, and insured?",
    answer:
      "Yes. JAMI Cleaning Inc is licensed, bonded, and insured for your protection and peace of mind.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our standard hours are Monday through Friday, 8:00 AM to 8:00 PM. We can also accommodate special scheduling requests when needed.",
  },
  {
    question: "Do you charge late fees?",
    answer:
      "No. We keep billing simple and predictable without surprise late fees.",
  },
  {
    question: "What is included in vehicle detailing?",
    answer:
      "Interior and exterior cleaning, vacuuming, mats, windows, deodorizing, and clear coat protectant. Larger vehicles or vehicles that are very dirty may require additional time and cost.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Grande Prairie, Alberta and serve homes, businesses, vehicles, and yards in the local area.",
  },
  {
    question: "Who owns JAMI Cleaning Inc?",
    answer:
      "JAMI Cleaning Inc is locally owned and operated by Ramin and Leila Jami, who are committed to ongoing training, safety certifications, and high service standards.",
  },
];

const FAQ = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
      <div className="bg-navy-gradient text-primary-foreground text-xs sm:text-sm">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 py-2">
          <p className="opacity-90">Serving Grande Prairie homes, businesses, vehicles &amp; yards</p>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_1}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" /> {PHONE_1}
            </a>
            <a href={`mailto:${EMAIL}`} className="hidden sm:flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" /> {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2">
            <img src={logoAsset.url} alt="JAMI Cleaning Inc" className="h-9 w-auto" />
            <div className="leading-tight">
              <div className="font-bold text-lg tracking-tight">JAMI Cleaning Inc.</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">GRANDE PRAIRIE, AB</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="/#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="/#pricing" className="hover:text-secondary transition-colors">Pricing</a>
            <a href="/#process" className="hover:text-secondary transition-colors">Process</a>
            <a href="/#guarantee" className="hover:text-secondary transition-colors">Guarantee</a>
            <a href="/#about" className="hover:text-secondary transition-colors">About</a>
            <a href="/faq" className="text-secondary transition-colors">FAQ</a>
            <a href="/blog" className="hover:text-secondary transition-colors">Blog</a>
            <a href="/#contact" className="hover:text-secondary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <a href="/#contact">Request a Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container flex flex-col py-4 gap-3 text-sm font-medium">
              <a href="/#services" onClick={() => setMobileOpen(false)}>Services</a>
              <a href="/#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
              <a href="/#process" onClick={() => setMobileOpen(false)}>Process</a>
              <a href="/#guarantee" onClick={() => setMobileOpen(false)}>Guarantee</a>
              <a href="/#about" onClick={() => setMobileOpen(false)}>About</a>
              <a href="/faq" onClick={() => setMobileOpen(false)} className="text-secondary">FAQ</a>
              <a href="/blog" onClick={() => setMobileOpen(false)}>Blog</a>
              <a href="/#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* FAQ Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground clip-slant">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="container relative pt-8 pb-16 md:pt-12 md:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Questions &amp; Answers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              Frequently Asked <span className="bg-electric-gradient bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8">
              Quick answers about our services, pricing, and how we work in Grande Prairie. Still have a question? Call or email us directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base">
                <a href="/#contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base">
                <a href={`tel:${PHONE_1}`}><Phone className="mr-2 h-4 w-4" /> Call {PHONE_1}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline hover:text-secondary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 p-6 rounded-2xl bg-navy-gradient text-primary-foreground">
              <h2 className="text-xl font-bold mb-2">Still have questions?</h2>
              <p className="text-primary-foreground/80 mb-4">
                Our team is happy to help. Reach out by phone, email, or through the contact form.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  <a href="/#contact">Request a Quote</a>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                  <a href={`mailto:${EMAIL}`}><Mail className="mr-2 h-4 w-4" /> {EMAIL}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background text-foreground py-4 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <img src={logoFullAsset.url} alt="JAMI Cleaning Inc" className="h-40 w-auto" />
            <span className="text-muted-foreground">· Grande Prairie, AB</span>
          </div>
          <div className="text-muted-foreground">
            @jamicleaninginc · © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
