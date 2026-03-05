import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { Sparkles } from "lucide-react";

const services = [
  { slug: "botox", fr: "Botox", nl: "Botox", descFr: "Traitement des rides d'expression pour un visage lissé et rajeuni.", descNl: "Behandeling van expressierimpels voor een gladder en jonger gezicht." },
  { slug: "acide-hyaluronique", fr: "Acide hyaluronique", nl: "Hyaluronzuur", descFr: "Restauration du volume et hydratation profonde.", descNl: "Herstel van volume en diepe hydratatie." },
  { slug: "injection-levres", fr: "Lèvres", nl: "Lipfillers", descFr: "Volume et définition naturelle des lèvres.", descNl: "Natuurlijk volume en definitie van de lippen." },
  { slug: "jawline", fr: "Jawline", nl: "Jawline", descFr: "Redéfinition de l'ovale du visage.", descNl: "Herdefinitie van de gezichtscontouren." },
  { slug: "cernes", fr: "Cernes", nl: "Wallen", descFr: "Correction des cernes et du regard fatigué.", descNl: "Correctie van wallen en een vermoeid uiterlijk." },
  { slug: "skin-boosters", fr: "Skin Boosters", nl: "Skin Boosters", descFr: "Hydratation intense et éclat de la peau.", descNl: "Intense hydratatie en huidglans." },
];

const Services = () => {
  const { lang, t } = useLanguage();

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              className="group bg-cream p-8 rounded-sm border border-border hover:shadow-lg transition-all duration-300"
            >
              <Sparkles className="w-6 h-6 text-gold mb-4" />
              <h2 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">
                {lang === "fr" ? s.fr : s.nl}
              </h2>
              <p className="body-small">{lang === "fr" ? s.descFr : s.descNl}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
