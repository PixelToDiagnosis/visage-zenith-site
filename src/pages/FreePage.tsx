import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Download } from "lucide-react";

const FreePage = () => {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const pdfUrl =
    lang === "fr"
      ? "/guide-premiere-consultation-dr-bousmar.pdf"
      : "/gids-eerste-consultatie-dr-bousmar.pdf";

  const pdfFilename =
    lang === "fr"
      ? "guide-premiere-consultation-dr-bousmar.pdf"
      : "gids-eerste-consultatie-dr-bousmar.pdf";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = pdfFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <SEO
        titleFr="Guides gratuits — Médecine esthétique à Asse | Dr Bousmar"
        titleNl="Gratis gidsen — Esthetische geneeskunde Asse | Dr Bousmar"
        descFr="Téléchargez gratuitement nos guides : première consultation, Botox mythes & réalités, soins post-injection, peelings."
        descNl="Download gratis onze gidsen: eerste consultatie, Botox mythes & feiten, nazorg na injecties, peelings."
        path="/free"
      />
    <section className="section-padding bg-off-white">
      <div className="container-narrow">
        <SectionHeading
          title={t("Ressources gratuites", "Gratis gidsen")}
          subtitle={t(
            "Téléchargez nos guides gratuits pour mieux comprendre la médecine esthétique.",
            "Download onze gratis gidsen om esthetische geneeskunde beter te begrijpen."
          )}
        />

        <div className="max-w-xl mx-auto bg-cream p-10 md:p-14 rounded-sm border border-border text-center">
          <Download className="w-10 h-10 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-2xl mb-4">
            {t(
              "Le guide des actifs skincare",
              "De gids voor actieve skincare-ingrediënten"
            )}
          </h2>
          <p className="body-small mb-8">
            {t(
              "Découvrez les ingrédients actifs essentiels et leur rôle dans votre routine beauté.",
              "Ontdek de essentiële actieve ingrediënten en hun rol in uw beauty-routine."
            )}
          </p>

          {submitted ? (
            <div className="bg-off-white p-6 rounded-sm space-y-3">
              <p className="font-serif text-lg text-accent">
                {t("Merci ! Votre téléchargement a démarré.", "Bedankt! Uw download is gestart.")}
              </p>
              <a
                href={pdfUrl}
                download
                className="inline-block text-sm underline text-accent hover:opacity-80"
              >
                {t("Cliquez ici si rien ne se passe", "Klik hier als er niets gebeurt")}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                maxLength={255}
                placeholder={t("Votre adresse email", "Uw e-mailadres")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-off-white border border-border rounded-sm font-sans text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-accent text-accent-foreground font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm"
              >
                {t("Télécharger le guide", "Download de gids")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default FreePage;
