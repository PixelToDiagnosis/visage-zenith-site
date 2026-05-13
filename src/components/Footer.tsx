import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="font-serif text-2xl font-light mb-4">Dr Marie-Eve Bousmar</h3>
            <p className="text-sm font-light opacity-70 leading-relaxed">
              {t(
                "Médecine esthétique de qualité pour des résultats naturels et harmonieux.",
                "Kwalitatieve esthetische geneeskunde voor natuurlijke en harmonieuze resultaten."
              )}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t("Navigation", "Navigatie")}</h4>
            <div className="space-y-2">
              {[
                { path: "/", label: t("Accueil", "Home") },
                { path: "/services", label: t("Traitements", "Behandelingen") },
                { path: "/about", label: t("À propos", "Over mij") },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">{t("Traitements", "Behandelingen")}</h4>
            <div className="space-y-2">
              {["Botox", t("Acide hyaluronique", "Hyaluronzuur"), "Skin Boosters", t("Inducteurs de collagène", "Collageenstimulatie")].map((item) => (
                <p key={item} className="text-sm opacity-70">{item}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-70" />
                <span className="text-sm opacity-70">+32 456 83 13 40</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-70" />
                <span className="text-sm opacity-70">dr.mbousmar@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 opacity-70" />
                <span className="text-sm opacity-70">11 Gildehof, 1730 Asse</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 opacity-70" />
                <span className="text-sm opacity-70">{t("Forumlaan 2, 1020 Laeken", "Forumlaan 2, 1020 Laken")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Dr Marie-Eve Bousmar. {t("Tous droits réservés.", "Alle rechten voorbehouden.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
