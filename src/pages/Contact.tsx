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
              {[
                { icon: Phone, label: t("Téléphone", "Telefoon"), value: "+32 474 63 60 22" },
                { icon: Mail, label: "Email", value: "dr.mbousmar@gmail.com" },
                { icon: MapPin, label: t("Adresse", "Adres"), value: t("Forumlaan 2, 1020 Laeken", "Forumlaan 2, 1020 Laken") },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-serif text-lg">{item.label}</p>
                    <p className="body-small">{item.value}</p>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/32474636022"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-sans text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              {/* Google Map */}
              <div className="rounded-sm overflow-hidden aspect-video">
                <iframe
                  title={t("Carte du cabinet", "Kaart van de praktijk")}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.5!2d4.3517!3d50.8783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c4e5b7f0d%3A0x0!2sForumlaan%202%2C%201020%20Brussel!5e0!3m2!1sfr!2sbe!4v1710000000000"
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
      </section>
    </>
  );
};

export default Contact;
