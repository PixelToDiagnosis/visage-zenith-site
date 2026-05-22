import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <SectionHeading
            title="Contact"
            subtitle={t(
              "Prenez rendez-vous ou posez-nous vos questions.",
              "Maak een afspraak of stel ons uw vragen."
            )}
          />

          <div className="space-y-12">
            {/* Info */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="font-serif text-lg">{t("Téléphone", "Telefoon")}</p>
                  <p className="body-small">+32 456 83 13 40</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="font-serif text-lg">Email</p>
                  <p className="body-small">dr.mbousmar@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="font-serif text-lg">{t("Adresses", "Adressen")}</p>
                  <p className="body-small">11 Gildehof, 1730 Asse</p>
                  <p className="body-small mt-1">{t("Forumlaan 2, 1020 Laeken", "Forumlaan 2, 1020 Laken")}</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-sm overflow-hidden aspect-video">
                <iframe
                  title={t("Cabinet Asse", "Praktijk Asse")}
                  src="https://www.google.com/maps?q=Gildehof+11,+1730+Asse,+Belgium&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-sm overflow-hidden aspect-video">
                <iframe
                  title={t("Cabinet Laeken", "Praktijk Laken")}
                  src="https://www.google.com/maps?q=Forumlaan+2,+1020+Laken,+Belgium&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/32456831340"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-sans text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/dr_marie.eve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-sans text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
              >
                <InstagramIcon className="w-4 h-4" />
                Instagram
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
