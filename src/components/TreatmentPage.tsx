import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import SEO from "@/components/SEO";
import { Clock, Shield, CheckCircle, Euro } from "lucide-react";

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
  priceFr?: string;
  priceNl?: string;
}

const TreatmentPage = ({ data }: { data: TreatmentData }) => {
  const { lang, t } = useLanguage();
  const isFr = lang === "fr";

  return (
    <>
      <SEO
        titleFr={`${data.titleFr} à Asse | Dr Marie-Eve Bousmar`}
        titleNl={`${data.titleNl} in Asse | Dr Marie-Eve Bousmar`}
        descFr={data.metaDescFr}
        descNl={data.metaDescNl}
        path={`/${data.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          name: isFr ? data.titleFr : data.titleNl,
          description: isFr ? data.metaDescFr : data.metaDescNl,
          procedureType: "Cosmetic",
          bodyLocation: "Face",
          url: `https://www.drmarieevebousmar.be/${data.slug}`,
          performer: {
            "@type": "Physician",
            name: "Dr Marie-Eve Bousmar",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Gildehof 11",
              addressLocality: "Asse",
              postalCode: "1730",
              addressCountry: "BE",
            },
          },
        }}
      />
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
          <p className="body-small italic mt-6 text-muted-foreground">
            {t(
              "Cette liste est donnée à titre indicatif et n'est pas exhaustive. N'hésitez pas à me consulter pour discuter de vos besoins spécifiques.",
              "Deze lijst is indicatief en niet uitputtend. Aarzel niet om mij te raadplegen om uw specifieke behoeften te bespreken."
            )}
          </p>
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

      {/* Price */}
      {(data.priceFr || data.priceNl) && (
        <section className="section-padding bg-cream">
          <div className="container-narrow">
            <div className="flex items-center gap-3 mb-6">
              <Euro className="w-6 h-6 text-gold" />
              <h3 className="heading-subsection">{t("Prix", "Prijs")}</h3>
            </div>
            <p className="body-text">{isFr ? data.priceFr : data.priceNl}</p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-off-white">
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
          <CTAButton to="https://www.doctoranytime.be/nl/d/esthetisch-arts/marie-eve-bousmar">{t("Prendre rendez-vous", "Maak een afspraak")}</CTAButton>
        </div>
      </section>
    </>
  );
};

export default TreatmentPage;
