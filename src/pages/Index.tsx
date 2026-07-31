import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle2, ArrowRight,
  Home, Building2, Car, Trees, Star, Sparkles, ClipboardList, CalendarCheck,
  Menu, X, Infinity as InfinityIcon, Droplets, Hotel, HardHat, Stethoscope,
  Briefcase, ShoppingBag, Truck, Hammer, Users, ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import heroImg from "@/assets/hero-cleaning.jpg";
import residentialImg from "@/assets/residential.jpg";
import residentialPhoto from "@/assets/residential-cleaning.jpg.asset.json";
import commercialImg from "@/assets/commercial.jpg";
import commercialPhoto from "@/assets/commercial-cleaning.jpg.asset.json";
import vehicleImg from "@/assets/vehicle.jpg";
import vehiclePhoto from "@/assets/vehicle-detailing.jpg.asset.json";
import yardImg from "@/assets/yard.jpg";
import yardPhoto from "@/assets/yard-seasonal.jpg.asset.json";
import logoAsset from "@/assets/jami-logo-new.png.asset.json";
import logoFullAsset from "@/assets/jami-logo-new.png.asset.json";
import logoFullTransparentAsset from "@/assets/jami-logo-transparent.png.asset.json";
import logoIconAsset from "@/assets/jami-icon.png.asset.json";

import teamJamiImg from "@/assets/team-jami.png.asset.json";
import mapleLeafAsset from "@/assets/maple-leaf.png.asset.json";
import pressureWashingPhoto from "@/assets/pressure-washing.jpg.asset.json";

const MapleLeaf = ({ className }: { className?: string }) => (
  <img
    src={mapleLeafAsset.url}
    alt="Canadian maple leaf"
    className={className}
    loading="lazy"
  />
);

const PhotoWatermark = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute bottom-2 right-2 md:bottom-3 md:right-3 z-10 h-9 w-9 md:h-10 md:w-10 rounded-full bg-background/95 backdrop-blur-sm shadow-card-bold ring-1 ring-primary/10 flex items-center justify-center p-1 ${className}`}
    aria-hidden="true"
  >
    <img
      src={logoIconAsset.url}
      alt=""
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
);

const PHONE_1 = "780-897-3077";
const EMAIL = "Accounting@jamicleaninginc.com";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    img: residentialPhoto.url,
    items: ["Kitchens, Bathrooms & Floors", "Recurring or One-Time Visits", "Move-In / Move-Out Ready"],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    img: commercialPhoto.url,
    items: ["Offices, retail & oilfield", "Sanitation-focused work", "Dependable scheduling"],
  },
  {
    icon: Car,
    title: "Vehicle Detailing",
    img: vehiclePhoto.url,
    items: ["Interior & exterior detail", "Mats, windows, vacuuming", "Clear coat protectant"],
  },
  {
    icon: Trees,
    title: "Yard & Seasonal",
    img: yardPhoto.url,
    items: ["Mowing, edging & trimming", "Weed spraying & aeration", "Snow removal & cleanup"],
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    img: pressureWashingPhoto.url,
    items: ["Driveways & sidewalks", "Drive-thrus & entrances", "Building exteriors"],
  },
];

const trustPoints = [
  { icon: Shield, label: "Licensed, Bonded & Insured" },
  { icon: Users, label: "Locally & Family Owned" },
  { icon: CheckCircle2, label: "No Cancellation Fees" },
  { icon: Award, label: "10+ Years of Experience" },
  { icon: MapleLeaf, label: "Canadian Owned & Operated\u00a0" },
];

const beforeAfter = [
  {
    title: "Residential Kitchen Deep Clean",
    caption: "Grande Prairie home, full kitchen reset.",
  },
  {
    title: "Vehicle Interior Detailing",
    caption: "Interior detail with mats, seats, and glass.",
  },
  {
    title: "Driveway Pressure Washing",
    caption: "Exterior concrete restored with pressure washing.",
  },
];

const steps = [
  { n: "01", icon: ClipboardList, title: "Tell us what needs cleaning", copy: "Share the space, service, and timing, takes about a minute." },
  { n: "02", icon: CalendarCheck, title: "Get a quote and schedule", copy: "We follow up quickly with pricing and available times." },
  { n: "03", icon: Sparkles, title: "Enjoy a cleaner space", copy: "Trained staff show up on time and get the job done right." },
];

const reviews = [
  { name: "Katie Gaucher", role: "Google review, Local Guide", text: "We always have great experiences with Jami Cleaning. They are dependable, professional, and consistently provide high-quality work. It's clear they take pride in what they do, and it shows in the results every time. I would absolutely recommend their services to anyone looking for a trustworthy cleaning company!" },
  { name: "Karson Millier", role: "Google review", text: "10/10 work definitely gunna keep going back got the carpet looking like new not a speck of dirt to be found" },
  { name: "Jesse Arnold", role: "Facebook recommendation", text: "Employees are very professional got the job done in a timely matter and the pricing was very affordable liable would definitely recommend using them" },
];

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Request received", { description: "We'll follow up shortly with availability." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
      <div className="bg-navy-gradient text-primary-foreground text-xs sm:text-sm">
        <div className="container flex flex-col sm:flex-row items-end sm:items-center justify-between gap-1 sm:gap-4 py-2">
          <p className="opacity-90 hidden sm:flex items-center gap-2">
            Serving Grande Prairie, Wembley, Clairmont & the County of Grande Prairie, AB
          </p>
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
        <div className="container flex items-center justify-between gap-3 h-20 sm:h-24">
          <a href="#" className="flex items-center gap-3 min-w-0">
            <img src={logoAsset.url} alt="JAMI Cleaning Inc" className="h-14 sm:h-16 lg:h-[72px] w-auto max-w-[210px] object-contain" />
            <div className="hidden sm:block lg:hidden xl:block leading-tight border-l border-border pl-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Grande Prairie, AB</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">🍁 Proudly Canadian</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium whitespace-nowrap">
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#pricing" className="hover:text-secondary transition-colors">Pricing</a>
            <a href="#process" className="hover:text-secondary transition-colors">Process</a>
            <a href="#guarantee" className="hover:text-secondary transition-colors">Guarantee</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="/faq" className="hover:text-secondary transition-colors">FAQ</a>
            <a href="/blog" className="hover:text-secondary transition-colors">Blog</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <a href="#contact">Request a Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
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
              <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
              <a href="#process" onClick={() => setMobileOpen(false)}>Process</a>
              <a href="#guarantee" onClick={() => setMobileOpen(false)}>Guarantee</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <a href="/faq" onClick={() => setMobileOpen(false)}>FAQ</a>
              <a href="/blog" onClick={() => setMobileOpen(false)}>Blog</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground clip-slant">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" className="w-full h-full object-cover" width={1600} height={1200} />
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="container relative pt-8 pb-16 md:pt-12 md:pb-28 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Grande Prairie · Alberta
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Professional Cleaning &amp; Maintenance Services in{" "}
              <span className="bg-electric-gradient bg-clip-text text-transparent">Grande Prairie</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8">
              From homes and offices to vehicles and yards, JAMI Cleaning Inc helps keep your
              space clean, cared for, and ready for everyday life.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base">
                <a href="#contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base">
                <a href={`tel:${PHONE_1}`}><Phone className="mr-2 h-4 w-4" /> Call {PHONE_1}</a>
              </Button>
            </div>
          </div>

          {/* Trust panel */}
          <div className="lg:col-span-2">
            <div className="bg-background/95 backdrop-blur text-foreground rounded-xl p-6 md:p-7 shadow-bold border border-border">
              <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-4">Why choose us</div>
              <div className="grid grid-cols-1 gap-4">
                {trustPoints.map((t) => (
                  <div key={t.label} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-electric-gradient flex items-center justify-center flex-shrink-0">
                      <t.icon className="h-5 w-5 brightness-0 invert" />
                    </div>
                    <div className="font-semibold">{t.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-muted-foreground">Trusted locally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-10 md:py-14">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">Our Services</div>
              <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">Choose the service you need</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              One team for the spaces you live, work, drive, and relax in. Book one, or bundle a few.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {services.map((s) => (
              <article key={s.title} className="group rounded-xl overflow-hidden bg-card border border-border shadow-card-bold hover:shadow-bold hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1200} height={900}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute top-3 left-3 h-10 w-10 rounded-lg bg-background/95 flex items-center justify-center shadow-card-bold">
                    <s.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <PhotoWatermark />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                  <ul className="space-y-2 mb-5 text-sm text-muted-foreground">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:gap-2 transition-all">
                    Get a quote <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-3 flex items-center justify-center gap-2">
                <InfinityIcon className="h-4 w-4 text-secondary" /> Built For Both <InfinityIcon className="h-4 w-4 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">Every space, one trusted team.</h2>
              <p className="text-muted-foreground mt-3 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                From homes and Airbnbs to offices, hospitals, and oilfield camps, we clean it all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* For Homes */}
              <div className="rounded-xl overflow-hidden bg-primary text-primary-foreground shadow-bold">
                <div className="p-6 md:p-8 border-b border-primary-foreground/10 flex items-center gap-3">
                  <Home className="h-8 w-8 text-accent" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-accent font-bold">Residential</div>
                    <h3 className="text-2xl md:text-3xl font-bold">For homes</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-primary-foreground/10">
                  {[
                    { icon: Home, label: "Recurring home cleans" },
                    { icon: Sparkles, label: "Deep cleaning" },
                    { icon: Truck, label: "Move-in / move-out" },
                    { icon: Hotel, label: "Airbnb turnovers" },
                    { icon: Hammer, label: "Post-construction" },
                    { icon: Droplets, label: "Window cleaning" },
                  ].map((s) => (
                    <div key={s.label} className="bg-primary p-4 flex items-center gap-3">
                      <s.icon className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-semibold">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 md:p-8">
                  <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-accent hover:gap-3 transition-all">
                    Book a home clean <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* For Businesses */}
              <div className="rounded-xl overflow-hidden bg-secondary text-secondary-foreground shadow-bold">
                <div className="p-6 md:p-8 border-b border-secondary-foreground/10 flex items-center gap-3">
                  <Building2 className="h-8 w-8" />
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold opacity-80">Commercial & Industrial</div>
                    <h3 className="text-2xl md:text-3xl font-bold">For businesses</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-secondary-foreground/10">
                  {[
                    { icon: Briefcase, label: "Office cleaning" },
                    { icon: ShoppingBag, label: "Retail spaces" },
                    { icon: HardHat, label: "Oilfield & industrial" },
                    { icon: Stethoscope, label: "Healthcare facilities*" },
                    { icon: Hammer, label: "Post-construction" },
                    { icon: Droplets, label: "Pressure washing" },
                  ].map((s) => (
                    <div key={s.label} className="bg-secondary p-4 flex items-center gap-3">
                      <s.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm font-semibold">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs opacity-80 mb-3">*Owner/operators hold Bloodborne Pathogens certification.</p>
                  <a href="#contact" className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all">
                    Schedule a walkthrough <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-10 md:py-14 bg-navy-gradient text-primary-foreground">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={logoFullAsset.url} alt="JAMI Cleaning Inc" className="h-16 md:h-20 w-auto mb-3 -mt-[50px] rounded-md bg-white p-2" />
            <div className="hidden md:block text-xs uppercase tracking-widest font-bold text-accent mb-3">About JAMI</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Owner-operated, locally rooted.</h2>
            <p className="text-lg text-primary-foreground/80 mb-4">
              JAMI Cleaning Inc is owned and operated by <strong className="text-primary-foreground">Ramin</strong> and{" "}
              <strong className="text-primary-foreground">Leila Jami</strong>, a Grande Prairie team with 10+ years in the
              cleaning industry and a commitment to ongoing training and high service standards.
            </p>
            <p className="text-primary-foreground/70 mb-6">
              Certifications include WHMIS, Personal Protective Equipment, Bloodborne Pathogens, Ladder Safety,
              and Pandemic Awareness, because doing the job right starts with knowing the job.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              <div className="p-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-center">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-xs text-primary-foreground/70 mt-1">Years experience</div>
              </div>
              <div className="p-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-xs text-primary-foreground/70 mt-1">Certifications</div>
              </div>
              <div className="p-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-center">
                <div className="text-3xl font-bold text-accent">24h</div>
                <div className="text-xs text-primary-foreground/70 mt-1">Re-clean window</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-electric-gradient rounded-2xl opacity-20 blur-2xl" />
            <div className="relative bg-background rounded-2xl overflow-hidden text-foreground shadow-bold border border-border">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 aspect-square md:aspect-auto md:h-auto relative">
                  <img
                    src={teamJamiImg.url}
                    alt="Ramin and Leila Jami, owners of JAMI Cleaning Inc"
                    className="w-full h-full object-cover object-top"
                  />
                  
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="text-6xl font-bold bg-electric-gradient bg-clip-text text-transparent leading-none mb-2 ml-[-10px]">"</div>
                    <p className="text-lg md:text-xl font-medium leading-relaxed">
                      Our team handles the details so you can focus on what matters most. From sparkling kitchens to spotless bathrooms, we make sure every corner feels like home.
                    </p>
                    <div className="text-6xl font-bold bg-electric-gradient bg-clip-text text-transparent leading-none text-right mt-2">"</div>
                  </div>
                  <div className="flex items-center gap-3 pt-6 mt-4 border-t border-border">
                    <img src={logoIconAsset.url} alt="JAMI Cleaning Inc" className="h-16 w-16 rounded-full bg-background border border-border p-0.5 shadow-sm" />
                    <div>
                      <div className="font-bold">Ramin &amp; Leila Jami</div>
                      <div className="text-sm text-muted-foreground">Owner / Operators</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* PROCESS */}
      <section id="process" className="py-10 md:py-14 bg-muted/50 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">How It Works</div>
            <h2 className="text-3xl md:text-5xl font-bold">Three steps. Zero guesswork.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative bg-card rounded-xl p-8 shadow-card-bold border border-border">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-14 w-14 rounded-lg bg-primary flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-bold text-muted-foreground/30">{s.n}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.copy}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-secondary z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section id="guarantee" className="py-10 md:py-14 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img src={logoIconAsset.url} alt="JAMI Cleaning Inc" className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary-foreground/95 p-0.5 shadow-card-bold" />
                <div className="text-xs uppercase tracking-widest font-bold text-accent">Our Promise</div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">Reliable service, backed by standards.</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Why choose JAMI Cleaning? We handle every detail, so you can enjoy a clean space without the stress. If something is not right, we will return within 24 hours to make it right. With transparent pricing, zero late or cancellation fees, and our Re-Cleaning Guarantee trying JAMI Cleaning is practically risk-free.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                <a href="#contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: "Trained staff", d: "Reliable team held to high service standards." },
                { t: "Licensed, bonded & insured", d: "Fully covered for your peace of mind." },
                { t: "Re-cleaning guarantee", d: "We will come back to ensure cleanliness within 24 hours if you're dissatisfied." },
                { t: "No late fees", d: "Simple, predictable billing without surprise penalties." },
                { t: "No cancellation fees", d: "Reschedule or cancel without hassle, ever." },
                { t: "Certified operators", d: "WHMIS, PPE, Bloodborne Pathogens, Ladder Safety." },
              ].map((f) => (
                <div key={f.t} className="p-5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:border-secondary transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-accent mb-2" />
                  <div className="font-bold mb-1">{f.t}</div>
                  <div className="text-sm text-primary-foreground/70">{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="hidden md:block py-10 md:py-14 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <img src={logoFullTransparentAsset.url} alt="JAMI Cleaning Inc" className="h-16 md:h-20 w-auto mx-auto mb-4" />
            <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">Pricing Guidance</div>
            <h2 className="text-3xl md:text-5xl font-bold">Transparent Pricing</h2>
            <p className="text-muted-foreground mt-4">
              Know what to expect before requesting your quote. Final pricing may vary depending on the size, condition, and specific needs of the property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start mb-6">
            <article className="bg-card rounded-xl p-7 border border-border shadow-card-bold">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Residential</div>
                  <h3 className="text-2xl font-bold">Home Cleaning</h3>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-secondary leading-none">$45</div>
                  <div className="text-xs text-muted-foreground mt-1">/ hour, per employee</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">
                Straightforward hourly pricing. Choose a basic recurring clean or a full deep clean, whichever fits your home.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 border-t border-border pt-4">
                <div className="rounded-lg border border-border p-4 bg-muted/40">
                  <div className="text-xs uppercase tracking-widest font-bold text-primary mb-2">Basic Clean</div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Kitchen surfaces & appliances (exterior)</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Bathrooms: toilets, sinks, tubs</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Vacuum & mop all floors</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Dusting reachable surfaces</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Trash & light tidy</span></li>
                  </ul>
                </div>
                <div className="rounded-lg border-2 border-secondary p-4 bg-secondary/5">
                  <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Deep Clean</div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Everything in Basic, plus:</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Inside oven, fridge & microwave</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Baseboards, doors & light fixtures</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Tile grout, showerheads, hard-water spots</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" /><span>Interior windows & tracks</span></li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="bg-card rounded-xl p-7 border border-border shadow-card-bold">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Commercial</div>
                  <h3 className="text-2xl font-bold">Business Cleaning</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-secondary leading-none">Custom</div>
                  <div className="text-xs text-muted-foreground mt-1">per contract</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">Priced per visit on a schedule that fits your space. Longer commitments unlock better rates.</p>
              <ul className="space-y-2 text-sm border-t border-border pt-4">
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Offices, retail & clinics</span><span className="font-bold">custom quote</span></li>
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Oilfield & industrial</span><span className="font-bold">custom quote</span></li>
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Post-construction cleanup</span><span className="font-bold">custom quote</span></li>
              </ul>
            </article>

            <article className="bg-card rounded-xl p-7 border border-border shadow-card-bold">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Auto</div>
                  <h3 className="text-2xl font-bold">Vehicle Detailing</h3>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-secondary leading-none">$120</div>
                  <div className="text-xs text-muted-foreground mt-1">starting</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">Priced by vehicle size and package. Larger vehicles and heavier condition may add to the estimate.</p>
              <ul className="space-y-2 text-sm border-t border-border pt-4">
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Interior detail (car / SUV)</span><span className="font-bold">from $120</span></li>
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Full interior + exterior</span><span className="font-bold">from $220</span></li>
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Trucks, vans & fleet</span><span className="font-bold">quoted individually</span></li>
              </ul>
            </article>

            <article className="bg-card rounded-xl p-7 border border-border shadow-card-bold">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-2">Outdoor</div>
                  <h3 className="text-2xl font-bold">Yard & Seasonal</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-secondary leading-none">Custom</div>
                  <div className="text-xs text-muted-foreground mt-1">per property</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">
                Custom pricing based on the property. Contact us for a personalized quote.
              </p>
              <ul className="space-y-2 text-sm border-t border-border pt-4">
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Lawn mowing, edging & trimming</span><span className="font-bold">custom quote</span></li>
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Weed spraying</span><span className="font-bold">custom quote</span></li>
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Aeration & dethatching</span><span className="font-bold">custom quote</span></li>
                <li className="flex items-center justify-between"><span className="text-muted-foreground">Snow removal & garbage cleanup</span><span className="font-bold">custom quote</span></li>
              </ul>
              <p className="text-xs text-muted-foreground italic mt-3">Lawn edging is included with mowing and trimming service.</p>
            </article>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            <article className="bg-card rounded-xl p-7 border border-border shadow-card-bold">
              <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">Window Care</div>
              <h3 className="text-2xl font-bold mb-2">Exterior Window Cleaning</h3>
              <p className="text-muted-foreground text-sm mb-6">Exterior glass and window-track cleaning.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Up to 1,500 sq. ft.</span>
                  <span className="font-bold">$150 + GST</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Up to 3,000 sq. ft.</span>
                  <span className="font-bold">$250 + GST</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Up to 5,000 sq. ft.</span>
                  <span className="font-bold">$400 + GST</span>
                </li>
              </ul>
            </article>

            <article className="bg-card rounded-xl p-7 border border-border shadow-card-bold">
              <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">Window Care</div>
              <h3 className="text-2xl font-bold mb-2">Interior and Exterior Window Cleaning</h3>
              <p className="text-muted-foreground text-sm mb-6">Interior and exterior glass, tracks, and screen cleaning.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Up to 1,500 sq. ft.</span>
                  <span className="font-bold">$300 + GST</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Up to 3,000 sq. ft.</span>
                  <span className="font-bold">$500 + GST</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Up to 5,000 sq. ft.</span>
                  <span className="font-bold">$700 + GST</span>
                </li>
              </ul>
            </article>

            <article className="bg-card rounded-xl p-7 border border-border shadow-card-bold">
              <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">Exterior</div>
              <h3 className="text-2xl font-bold mb-2">Pressure Washing</h3>
              <p className="text-muted-foreground text-sm mb-6">Driveways, sidewalks, drive-thrus, commercial entrances, and building exteriors.</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-secondary">Custom quote</span>
              </div>
              <ul className="space-y-2 text-sm border-t border-border pt-4 text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" /><span>Residential driveways & walkways</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" /><span>Commercial entrances & drive-thrus</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" /><span>Building exteriors & siding</span></li>
              </ul>
            </article>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <a href="#contact">Request an Exact Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Prices are starting guidelines in Canadian dollars. Every job is reviewed and confirmed before work begins.
            </p>
          </div>
        </div>
      </section>






      {/* REVIEWS */}

      <section className="py-10 md:py-14 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">What Clients Say</div>
              <h2 className="text-3xl md:text-5xl font-bold">Trusted across Grande Prairie.</h2>
              <div className="mt-5 inline-flex items-center gap-3 bg-card border border-border rounded-full pl-2 pr-4 py-2 shadow-card-bold">
                <div className="flex items-center gap-0.5 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <div className="text-sm font-bold">4.6 out of 5</div>
                <div className="h-4 w-px bg-border" />
                <div className="text-sm text-muted-foreground">9 Google reviews</div>
              </div>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="https://www.google.com/maps/place/Jami+Cleaning+Inc/data=!4m2!3m1!1s0x0:0x84c452305105715e" target="_blank" rel="noopener noreferrer">Read Google Reviews</a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card p-5 rounded-xl border border-border shadow-card-bold">
                <div className="flex items-center gap-1 text-accent mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-foreground/90 mb-4 leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <img src={logoIconAsset.url} alt="JAMI Cleaning Inc" className="h-10 w-10 rounded-full bg-background border border-border p-0.5 shadow-sm" />

                  <div>
                    <div className="font-bold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION / CONTACT */}
      <section id="contact" className="py-10 md:py-14 bg-hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="container relative grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src={logoIconAsset.url} alt="" aria-hidden="true" className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-background/95 p-1 shadow-card-bold" />
              <div className="text-xs uppercase tracking-widest font-bold text-accent">Get In Touch</div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Ready to get your space handled?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Send a few details and we'll follow up with availability and next steps.
            </p>

            <div className="space-y-4">
              <a href={`tel:${PHONE_1}`} className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:border-secondary transition-colors">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Primary</div>
                  <div className="font-bold text-lg">{PHONE_1}</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:border-secondary transition-colors">
                <div className="h-11 w-11 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Email</div>
                  <div className="font-bold text-sm md:text-base break-all">{EMAIL}</div>
                </div>
              </a>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                  <Clock className="h-4 w-4 text-accent mb-2" />
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Hours</div>
                  <div className="font-semibold text-sm">Mon-Fri · 8AM–10PM</div>
                </div>
                <div className="p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                  <MapPin className="h-4 w-4 text-accent mb-2" />
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Service Area</div>
                  <div className="font-semibold text-sm">Grande Prairie · Wembley · Clairmont</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                <div className="text-sm font-semibold">No cancellation fees, ever.</div>
              </div>
            </div>
          </div>


          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-background text-foreground rounded-2xl p-6 md:p-8 shadow-bold">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact">Phone or Email</Label>
                  <Input id="contact" name="contact" required placeholder="Best way to reach you" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="service">Service Type</Label>
                  <Select name="service">
                    <SelectTrigger id="service"><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Cleaning</SelectItem>
                      <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                      <SelectItem value="vehicle">Vehicle Detailing</SelectItem>
                      <SelectItem value="yard">Yard Maintenance</SelectItem>
                      <SelectItem value="pressure">Pressure Washing</SelectItem>
                      <SelectItem value="snow">Snow Removal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="timing">Preferred Timing</Label>
                  <Select name="timing">
                    <SelectTrigger id="timing"><SelectValue placeholder="When works?" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="week">This week</SelectItem>
                      <SelectItem value="month">This month</SelectItem>
                      <SelectItem value="recurring">Set up recurring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-1.5 mt-4">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Tell us about the space and what you need..." />
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base">
                Send Request <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                We typically respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background text-foreground py-6 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <img src={logoFullAsset.url} alt="JAMI Cleaning Inc" className="h-32 md:h-40 w-auto" />
            <div className="text-muted-foreground leading-relaxed">
              <div className="font-semibold text-foreground mb-1">
                <div>🍁 Proudly Canadian owned & operated</div>
                <div className="mt-3">Serving Grande Prairie, Wembley, Clairmont & the County of Grande Prairie</div>
              </div>
            </div>
          </div>
          <div className="text-muted-foreground text-center md:text-right">
            @jamicleaninginc · © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
