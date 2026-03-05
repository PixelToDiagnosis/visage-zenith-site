import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Clock, Shield, CheckCircle } from "lucide-react";

export interface TreatmentData {
  slug: string;
  titleFr: string;
  titleNl: string;
  metaDescFr: string;
  metaDescNl: string;
  introFr: string;
  introNl: string;
  descriptionFr: string;
  descriptionNl: string;
  indicationsFr: string[];
  indicationsNl: string[];
  procedureFr: string;
  procedureNl: string;
  durationFr: string;
  durationNl: string;
  resultsFr: string;
  resultsNl: string;
  safetyFr: string;
  safetyNl: string;
  faqFr: { q: string; a: string }[];
  faqNl: { q: string; a: string }[];
}

const TreatmentPage = ({ data }: { data: TreatmentData }) => {
  const { lang, t } = useLanguage();
  const isFr = lang === "fr";

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="gold-line mb-6" />
          <h1 className="heading-display mb-6">{isFr ? data.titleFr : data.titleNl}</h1>
          <p className="body-text max-w-2xl">{isFr ? data.introFr : data.introNl}</p>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-off-white">
        <div className="container-narrow">
          <SectionHeading title={t("Description", "Beschrijving")} centered={false} />
          <p className="body-text">{isFr ? data.descriptionFr : data.descriptionNl}</p>
        </div>
      </section>

      {/* Indications */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <SectionHeading title={t("Indications", "Indicaties")} centered={false} />
          <ul className="space-y-3">
            {(isFr ? data.indicationsFr : data.indicationsNl).map((ind, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="body-text">{ind}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Procedure */}
      <section className="section-padding bg-off-white">
        <div className="container-narrow">
          <SectionHeading title={t("Procédure", "Behandeling")} centered={false} />
          <p className="body-text">{isFr ? data.procedureFr : data.procedureNl}</p>
        </div>
      </section>

      {/* Duration & Results */}
      <section className="section-padding bg-cream">
        <div className="container-narrow grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gold" />
              <h3 className="heading-subsection">{t("Durée", "Duur")}</h3>
            </div>
            <p className="body-text">{isFr ? data.durationFr : data.durationNl}</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-gold" />
              <h3 className="heading-subsection">{t("Résultats", "Resultaten")}</h3>
            </div>
            <p className="body-text">{isFr ? data.resultsFr : data.resultsNl}</p>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-padding bg-off-white">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-gold" />
            <h3 className="heading-subsection">{t("Sécurité", "Veiligheid")}</h3>
          </div>
          <p className="body-text">{isFr ? data.safetyFr : data.safetyNl}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <SectionHeading title="FAQ" centered={false} />
          <div className="space-y-6">
            {(isFr ? data.faqFr : data.faqNl).map((faq, i) => (
              <div key={i}>
                <h4 className="font-serif text-lg mb-2">{faq.q}</h4>
                <p className="body-small">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-beige text-center">
        <div className="container-narrow">
          <h2 className="heading-section mb-6">
            {t("Intéressé(e) par ce traitement ?", "Geïnteresseerd in deze behandeling?")}
          </h2>
          <p className="body-text mb-10 max-w-lg mx-auto">
            {t(
              "Prenez rendez-vous pour une consultation personnalisée.",
              "Maak een afspraak voor een persoonlijk consult."
            )}
          </p>
          <CTAButton to="/contact">{t("Prendre rendez-vous", "Maak een afspraak")}</CTAButton>
        </div>
      </section>
    </>
  );
};

export default TreatmentPage;
