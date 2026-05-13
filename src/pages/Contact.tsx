import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-cream p-10 rounded-sm text-center">
                  <p className="font-serif text-2xl text-accent mb-2">
                    {t("Message envoyé !", "Bericht verzonden!")}
                  </p>
                  <p className="body-small">
                    {t("Nous vous répondrons dans les plus brefs délais.", "Wij antwoorden u zo snel mogelijk.")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    required
                    maxLength={100}
                    placeholder={t("Nom complet", "Volledige naam")}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-border rounded-sm font-sans text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <input
                    type="email"
                    required
                    maxLength={255}
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-border rounded-sm font-sans text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <input
                    type="tel"
                    maxLength={20}
                    placeholder={t("Téléphone", "Telefoon")}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-border rounded-sm font-sans text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    placeholder={t("Votre message", "Uw bericht")}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-border rounded-sm font-sans text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-accent text-accent-foreground font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm"
                  >
                    {t("Envoyer", "Verzenden")}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
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

              <a
                href="https://wa.me/32456831340"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-sans text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              {/* Google Maps */}
              <div className="space-y-4">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
