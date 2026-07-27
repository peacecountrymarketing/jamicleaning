import { useState } from "react";
import { Phone, Mail, ArrowRight, Menu, X, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/jami-logo-new.png.asset.json";
import logoFullAsset from "@/assets/jami-logo-new.png.asset.json";

const PHONE_1 = "780-897-3077";
const EMAIL = "Accounting@jamicleaninginc.com";

const posts = [
  {
    slug: "residential-cleaning-tips-grande-prairie",
    category: "Residential",
    title: "Residential Cleaning Tips for Grande Prairie Homeowners",
    date: "January 15, 2026",
    readTime: "4 min read",
    excerpt:
      "Keep your Grande Prairie home fresh between professional visits with these practical cleaning habits tailored for Alberta households.",
    content: [
      "Dust and dry air are common in Grande Prairie, especially during the winter months. Start by dusting high surfaces first, then work your way down to floors and baseboards. This prevents resettling dust on already-cleaned areas.",
      "Vacuum carpets and rugs at least twice a week to reduce allergens, dirt, and pet hair. Entryways and mudrooms need extra attention during spring thaw and winter snowfall.",
      "Use microfiber cloths for windows and mirrors to avoid streaks. For kitchens and bathrooms, focus on sanitizing sinks, faucets, and handles where bacteria collect quickly.",
      "A consistent routine makes professional cleaning more effective. When you schedule recurring visits from JAMI Cleaning Inc, the team can maintain the deep-clean results and keep your home comfortable year-round.",
    ],
  },
  {
    slug: "commercial-cleaning-grande-prairie-businesses",
    category: "Commercial",
    title: "Why Grande Prairie Businesses Choose Professional Cleaning",
    date: "January 10, 2026",
    readTime: "5 min read",
    excerpt:
      "A clean workplace creates a better first impression, healthier staff, and more productive teams. Here is what commercial cleaning covers.",
    content: [
      "Offices, retail spaces, and commercial buildings in Grande Prairie see steady foot traffic. Regular cleaning reduces germs, dust, and allergens that build up on desks, counters, and shared surfaces.",
      "Professional commercial cleaning includes sanitizing restrooms, disinfecting touch points, emptying garbage, cleaning floors, and keeping common areas presentable. Dependable scheduling means your business never looks unprofessional.",
      "JAMI Cleaning Inc uses trained staff and proper products to meet the needs of different workspaces. A customized cleaning plan keeps your business ready for customers, employees, and inspections.",
    ],
  },
  {
    slug: "vehicle-detailing-alberta-weather",
    category: "Vehicle",
    title: "Vehicle Detailing: Protecting Your Investment in Alberta Weather",
    date: "January 5, 2026",
    readTime: "4 min read",
    excerpt:
      "Road salt, gravel, mud, and dust can damage your vehicle's interior and exterior. Regular detailing helps protect your car or truck.",
    content: [
      "Alberta roads can be tough on vehicles. Gravel, road salt, and mud wear down paint and exterior finishes over time. A thorough exterior wash and clear coat protectant add a layer of defense against the elements.",
      "Interior detailing removes dirt from carpets, mats, seats, and vents. Vacuuming, window cleaning, and deodorizing leave the cabin fresh and comfortable.",
      "JAMI Cleaning Inc offers interior and exterior detailing for cars, trucks, vans, and larger vehicles. Schedule a detail to keep your vehicle looking newer and maintain its resale value.",
    ],
  },
  {
    slug: "seasonal-yard-cleanup-grande-prairie",
    category: "Yard",
    title: "Seasonal Yard Cleanup and Lawn Care in Grande Prairie",
    date: "December 28, 2025",
    readTime: "5 min read",
    excerpt:
      "Keep your yard tidy and healthy through every season with mowing, edging, aeration, dethatching, and spring or fall cleanup services.",
    content: [
      "Grande Prairie yards go through dramatic seasonal changes. Spring cleanup removes winter debris, prepares lawns for growth, and clears gardens for planting. Fall cleanup removes leaves, branches, and dead plants before snow arrives.",
      "Regular mowing and edging keep grass looking neat and controlled. Aeration and dethatching improve soil health and water absorption, helping lawns survive hot summers and cold winters.",
      "JAMI Cleaning Inc provides yard maintenance and seasonal cleanup services throughout the Grande Prairie area. A maintained yard adds curb appeal and keeps your property safe and accessible.",
    ],
  },
  {
    slug: "snow-removal-safety-grande-prairie",
    category: "Seasonal",
    title: "Snow Removal Safety for Grande Prairie Properties",
    date: "December 20, 2025",
    readTime: "4 min read",
    excerpt:
      "Heavy snowfall can create safety hazards. Prompt snow removal keeps walkways, driveways, and parking areas clear and accessible.",
    content: [
      "Winter in Grande Prairie brings heavy snow and icy conditions. Slippery walkways and parking lots create liability risks for homeowners and businesses. Prompt snow removal reduces the chance of falls and accidents.",
      "Clear snow early and often during storms. Pay special attention to entrances, driveways, stairs, and high-traffic paths. Ice melt or sand can add traction on stubborn icy patches.",
      "JAMI Cleaning Inc offers snow removal services to keep residential and commercial properties safe all winter. Reliable removal means you do not have to worry about getting stuck or struggling with heavy snow.",
    ],
  },
  {
    slug: "choose-licensed-insured-cleaning-company",
    category: "Trust",
    title: "How to Choose a Licensed and Insured Cleaning Company",
    date: "December 15, 2025",
    readTime: "3 min read",
    excerpt:
      "Hiring a cleaning company means inviting people into your home or business. Here is why licensing, bonding, and insurance matter.",
    content: [
      "Always ask whether a cleaning company is licensed, bonded, and insured. These protections cover accidents, damage, theft, and liability while workers are on your property.",
      "Look for trained staff with relevant safety certifications. WHMIS, PPE, Bloodborne Pathogens, Ladder Safety, and Pandemic Awareness training show a company takes worker and client safety seriously.",
      "JAMI Cleaning Inc is licensed, bonded, and insured, with trained staff and certified owner-operators. Local ownership means accountability and a team that understands the Grande Prairie community.",
    ],
  },
];

const Blog = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPost, setOpenPost] = useState<string | null>(posts[0].slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
      <div className="bg-navy-gradient text-primary-foreground text-xs sm:text-sm">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 py-2">
          <p className="opacity-90 flex items-center gap-2">
            <span aria-hidden="true">🇨🇦</span> Proudly Canadian owned & operated, serving Grande Prairie, Wembley & Clairmont
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
        <div className="container flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="JAMI Cleaning Inc" className="h-12 sm:h-14 w-auto" />
            <div className="hidden sm:block leading-tight border-l border-border pl-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Grande Prairie, AB</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">🇨🇦 Canadian Owned</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="/#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="/#pricing" className="hover:text-secondary transition-colors">Pricing</a>
            <a href="/#process" className="hover:text-secondary transition-colors">Process</a>
            <a href="/#guarantee" className="hover:text-secondary transition-colors">Guarantee</a>
            <a href="/#about" className="hover:text-secondary transition-colors">About</a>
            <a href="/faq" className="hover:text-secondary transition-colors">FAQ</a>
            <a href="/blog" className="text-secondary transition-colors">Blog</a>
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
              <a href="/faq" onClick={() => setMobileOpen(false)}>FAQ</a>
              <a href="/blog" onClick={() => setMobileOpen(false)} className="text-secondary">Blog</a>
              <a href="/#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Blog Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground clip-slant">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="container relative pt-8 pb-16 md:pt-12 md:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Cleaning Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              Cleaning Tips &amp; Insights for{" "}
              <span className="bg-electric-gradient bg-clip-text text-transparent">Grande Prairie</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8">
              Practical advice for homes, businesses, vehicles, and yards in Grande Prairie, Alberta. Learn how to maintain a cleaner space and when to call the professionals.
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

      {/* Blog Posts */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  id={post.slug}
                  className="rounded-2xl border border-border bg-muted/30 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenPost(openPost === post.slug ? null : post.slug)}
                    className="w-full text-left p-6 md:p-8 hover:bg-muted/50 transition-colors"
                    aria-expanded={openPost === post.slug}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <span className="px-2 py-1 rounded bg-secondary/10 text-secondary">{post.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-2 hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base">{post.excerpt}</p>
                  </button>
                  {openPost === post.slug && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="border-t border-border pt-5 space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                        {post.content.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                          <a href="/#contact">Book a Service</a>
                        </Button>
                        <Button asChild variant="outline">
                          <a href={`tel:${PHONE_1}`}><Phone className="mr-2 h-4 w-4" /> Call {PHONE_1}</a>
                        </Button>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-10 p-6 md:p-8 rounded-2xl bg-navy-gradient text-primary-foreground">
              <h2 className="text-xl font-bold mb-2">Need cleaning help in Grande Prairie?</h2>
              <p className="text-primary-foreground/80 mb-4">
                JAMI Cleaning Inc provides residential, commercial, vehicle, and yard services throughout Grande Prairie and surrounding areas. Request a quote or call us directly.
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
      <footer className="bg-background text-foreground py-6 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <img src={logoFullAsset.url} alt="JAMI Cleaning Inc" className="h-32 md:h-40 w-auto" />
            <div className="text-muted-foreground leading-relaxed">
              <div className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                <span aria-hidden="true">🇨🇦</span> Proudly Canadian owned & operated
              </div>
              Grande Prairie · Wembley · Clairmont · County of GP
            </div>
          </div>
          <div className="text-muted-foreground">
            @jamicleaninginc · © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
