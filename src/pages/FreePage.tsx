import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { Download } from "lucide-react";

const FreePage = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
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
              "Comment préparer votre première consultation esthétique",
              "Hoe u uw eerste esthetische consultatie voorbereidt"
            )}
          </h2>
          <p className="body-small mb-8">
            {t(
              "Un guide pratique pour aborder sereinement votre première consultation : questions à poser, attentes réalistes et points clés à préparer.",
              "Een praktische gids om uw eerste consultatie sereen aan te pakken: te stellen vragen, realistische verwachtingen en belangrijke voorbereidingspunten."
            )}
          </p>

          {submitted ? (
            <div className="bg-off-white p-6 rounded-sm">
              <p className="font-serif text-lg text-accent">
                {t("Merci ! Vérifiez votre boîte mail.", "Bedankt! Controleer uw mailbox.")}
              </p>
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
  );
};

export default FreePage;
