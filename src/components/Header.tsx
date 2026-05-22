import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";

const treatments = [
  { slug: "botox", fr: "Botox", nl: "Botox" },
  {
    slug: "acide-hyaluronique", fr: "Acide hyaluronique", nl: "Hyaluronzuur",
    sub: [
      { slug: "injection-levres", fr: "Lèvres", nl: "Lipfillers" },
      { slug: "jawline", fr: "Jawline", nl: "Jawline" },
      { slug: "cernes", fr: "Cernes", nl: "Wallen" },
      { slug: "sillons-nasogeniens", fr: "Sillons nasogéniens", nl: "Nasolabiale plooien" },
    ],
  },
  { slug: "skin-boosters", fr: "Skin Boosters", nl: "Skin Boosters" },
  { slug: "prp-cheveux-visage", fr: "PRP Cheveux & Visage", nl: "PRP Haar & Gezicht" },
  { slug: "rejuran", fr: "Rejuran", nl: "Rejuran" },
];

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: t("Accueil", "Home") },
    
    { path: "/services", label: t("Traitements", "Behandelingen"), dropdown: true },
    { path: "/testimonials", label: t("Témoignages", "Getuigenissen") },
    { path: "/about", label: t("À propos", "Over mij") },
    { path: "/free", label: t("Gratuit", "Gratis") },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 md:h-20 px-6">
        <Link to="/" className="font-serif text-xl md:text-2xl font-medium tracking-wide text-foreground">
          Dr Marie-Eve Bousmar
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-1 body-small text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3" />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-off-white border border-border rounded-sm shadow-lg py-2">
                      {treatments.map((tr) => (
                        <div key={tr.slug}>
                          <Link
                            to={`/${tr.slug}`}
                            className="block px-4 py-2 body-small font-medium hover:bg-beige transition-colors"
                          >
                            {lang === "fr" ? tr.fr : tr.nl}
                          </Link>
                          {tr.sub?.map((sub) => (
                            <Link
                              key={sub.slug}
                              to={`/${sub.slug}`}
                              className="block px-4 pl-8 py-1.5 body-small text-muted-foreground hover:bg-beige transition-colors"
                            >
                              {lang === "fr" ? sub.fr : sub.nl}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`body-small transition-colors ${
                  location.pathname === item.path ? "text-accent font-normal" : "text-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "fr" ? "nl" : "fr")}
            className="body-small font-normal text-accent hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {lang === "fr" ? "NL" : "FR"}
          </button>
          <a
            href="https://www.doctoranytime.be/nl/d/esthetisch-arts/marie-eve-bousmar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-accent text-accent-foreground body-small font-normal tracking-wide hover:opacity-90 transition-opacity rounded-sm"
          >
            {t("Rendez-vous", "Afspraak")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden bg-off-white border-t border-border overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                className="block body-small text-foreground py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="ml-4 mt-1 space-y-1">
                  {treatments.map((tr) => (
                    <div key={tr.slug}>
                      <Link
                        to={`/${tr.slug}`}
                        className="block body-small text-muted-foreground py-2 font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        {lang === "fr" ? tr.fr : tr.nl}
                      </Link>
                      {tr.sub?.map((sub) => (
                        <Link
                          key={sub.slug}
                          to={`/${sub.slug}`}
                          className="block body-small text-muted-foreground py-2 ml-4"
                          onClick={() => setMobileOpen(false)}
                        >
                          {lang === "fr" ? sub.fr : sub.nl}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 flex items-center gap-4 border-t border-border">
            <button
              onClick={() => setLang(lang === "fr" ? "nl" : "fr")}
              className="body-small font-normal text-accent uppercase tracking-widest py-2"
            >
              {lang === "fr" ? "NL" : "FR"}
            </button>
            <a
              href="https://www.doctoranytime.be/nl/d/esthetisch-arts/marie-eve-bousmar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-accent text-accent-foreground body-small font-normal rounded-sm"
              onClick={() => setMobileOpen(false)}
            >
              {t("Rendez-vous", "Afspraak")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
