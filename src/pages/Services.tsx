import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { Sparkles, ChevronDown } from "lucide-react";
import treatmentImage from "@/assets/treatment-injection.jpg";

const services = [
  { slug: "botox", fr: "Botox", nl: "Botox", descFr: "Traitement des rides d'expression pour un visage lissé et rajeuni.", descNl: "Behandeling van expressierimpels voor een gladder en jonger gezicht." },
  {
    slug: "acide-hyaluronique", fr: "Acide hyaluronique", nl: "Hyaluronzuur",
    descFr: "Restauration du volume et hydratation profonde.",
    descNl: "Herstel van volume en diepe hydratatie.",
    sub: [
      { slug: "injection-levres", fr: "Lèvres", nl: "Lipfillers", descFr: "Volume et définition naturelle des lèvres.", descNl: "Natuurlijk volume en definitie van de lippen." },
      { slug: "jawline", fr: "Jawline", nl: "Jawline", descFr: "Redéfinition de l'ovale du visage.", descNl: "Herdefinitie van de gezichtscontouren." },
      { slug: "cernes", fr: "Cernes", nl: "Wallen", descFr: "Correction des cernes et du regard fatigué.", descNl: "Correctie van wallen en een vermoeid uiterlijk." },
      { slug: "sillons-nasogeniens", fr: "Sillons nasogéniens", nl: "Nasolabiale plooien", descFr: "Atténuation des plis entre le nez et la bouche pour un visage reposé.", descNl: "Vermindering van de plooien tussen neus en mond voor een uitgerust gezicht." },
    ],
  },
  { slug: "skin-boosters", fr: "Skin Boosters", nl: "Skin Boosters", descFr: "Hydratation intense et éclat de la peau.", descNl: "Intense hydratatie en huidglans." },
  { slug: "inducteurs-de-collagene", fr: "Inducteurs de collagène", nl: "Collageenstimulators", descFr: "Stimulation naturelle du collagène pour une peau raffermie et régénérée.", descNl: "Natuurlijke stimulatie van collageen voor een stevigere en vernieuwde huid." },
];

const Services = () => {
  const { lang, t } = useLanguage();
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleSub = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide">
        <SectionHeading
          title={t("Nos traitements", "Onze behandelingen")}
          subtitle={t(
            "Une gamme complète de soins esthétiques pour sublimer votre beauté naturelle.",
            "Een compleet gamma esthetische behandelingen om uw natuurlijke schoonheid te verbeteren."
          )}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) =>
            s.sub ? (
              <button
                key={s.slug}
                onClick={() => toggleSub(s.slug)}
                className="group block bg-cream p-8 rounded-sm border border-border hover:shadow-lg transition-all duration-300 h-full text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <Sparkles className="w-6 h-6 text-gold" />
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                      expandedSlug === s.slug ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <h2 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">
                  {lang === "fr" ? s.fr : s.nl}
                </h2>
                <p className="body-small">{lang === "fr" ? s.descFr : s.descNl}</p>
              </button>
            ) : (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group block bg-cream p-8 rounded-sm border border-border hover:shadow-lg transition-all duration-300 h-full"
              >
                <Sparkles className="w-6 h-6 text-gold mb-4" />
                <h2 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">
                  {lang === "fr" ? s.fr : s.nl}
                </h2>
                <p className="body-small">{lang === "fr" ? s.descFr : s.descNl}</p>
              </Link>
            )
          )}
        </div>

        {/* Sub-treatments revealed on click */}
        {services
          .filter((s) => s.sub && expandedSlug === s.slug)
          .map((s) => (
            <div
              key={`${s.slug}-sub`}
              className="mt-6 animate-in fade-in slide-in-from-top-2 duration-300"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {s.sub!.map((sub) => (
                  <Link
                    key={sub.slug}
                    to={`/${sub.slug}`}
                    className="group flex items-center gap-3 bg-cream px-6 py-5 rounded-sm border border-border hover:shadow-md hover:border-accent/30 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-base group-hover:text-accent transition-colors">
                        {lang === "fr" ? sub.fr : sub.nl}
                      </h3>
                      <p className="body-small text-muted-foreground text-xs mt-0.5">
                        {lang === "fr" ? sub.descFr : sub.descNl}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        <div className="mt-16 overflow-hidden rounded-sm shadow-lg">
          <img
            src={treatmentImage}
            alt={t("Traitement esthétique en consultation", "Esthetische behandeling tijdens consultatie")}
            className="w-full h-[400px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
