import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import doctorImage from "@/assets/doctor-portrait.jpg";
import { Award, GraduationCap, Heart } from "lucide-react";

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="section-padding bg-off-white">
        <div className="container-wide grid md:grid-cols-2 gap-12 md:gap-20 items-stretch">
          <div className="overflow-hidden rounded-sm shadow-lg">
            <img src={doctorImage} alt={t("Dr Marie-Eve Bousmar", "Dr Marie-Eve Bousmar")} className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <div className="gold-line mb-6" />
            <h1 className="heading-display mb-6">
              {t("À propos de Dr Marie-Eve Bousmar", "Over mij")}
            </h1>
            <p className="body-text mb-4">
              {t(
                "Diplômée en médecine de l'Université Catholique de Louvain, je me suis spécialisée en médecine esthétique à la Swiss Aesthetic Medicine and Business Academy (SAMBA).",
                "Afgestudeerd in de geneeskunde aan de Université Catholique de Louvain, heb ik mij verder gespecialiseerd in esthetische geneeskunde aan de Swiss Aesthetic Medicine and Business Academy (SAMBA)."
              )}
            </p>
            <p className="body-text mb-4">
              {t(
                "Ma pratique repose sur une conviction essentielle : la médecine esthétique doit préserver l'harmonie et l'authenticité du visage, en apportant des résultats subtils et naturels.",
                "Mijn praktijk is gebaseerd op een essentiële overtuiging: esthetische geneeskunde moet de harmonie en authenticiteit van het gezicht respecteren, met subtiele en natuurlijke resultaten."
              )}
            </p>
            <p className="body-text mb-4">
              {t(
                "J'aborde le vieillissement dans une vision globale et holistique, en tenant compte de facteurs essentiels tels que la nutrition, le sommeil, l'activité physique et l'équilibre de vie, afin d'accompagner chaque patient de manière personnalisée.",
                "Ik benader veroudering vanuit een globale en holistische visie, waarbij rekening wordt gehouden met essentiële factoren zoals voeding, slaap, lichaamsbeweging en een evenwichtige levensstijl, om elke patiënt op een persoonlijke manier te begeleiden."
              )}
            </p>
            <p className="body-text">
              {t(
                "Je poursuis continuellement des formations aux techniques les plus avancées afin d'offrir des soins sûrs, modernes et adaptés à chaque visage.",
                "Ik blijf mij voortdurend bijscholen in de meest geavanceerde technieken om veilige, moderne en op elk gezicht afgestemde behandelingen aan te bieden."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeading title={t("Parcours & Expertise", "Opleiding & Expertise")} />
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: t("Formation médicale", "Medische opleiding"), desc: t("Doctorat en médecine, Université Catholique de Louvain", "Doctoraat in de geneeskunde, Université Catholique de Louvain") },
              { icon: Award, title: t("Spécialisation", "Specialisatie"), desc: t("Diplôme universitaire en médecine esthétique et anti-âge", "Universitair diploma in esthetische en anti-aging geneeskunde") },
              
              { icon: Heart, title: t("Philosophie", "Filosofie"), desc: t("Des résultats naturels qui respectent l'harmonie de chaque visage", "Natuurlijke resultaten die de harmonie van elk gezicht respecteren") },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <p className="body-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige text-center">
        <div className="container-narrow">
          <h2 className="heading-section mb-6">
            {t("Envie d'en discuter ?", "Wilt u erover praten?")}
          </h2>
          <p className="body-text mb-10 max-w-lg mx-auto">
            {t(
              "Prenez rendez-vous pour une consultation personnalisée et découvrez comment la médecine esthétique peut révéler votre beauté naturelle.",
              "Maak een afspraak voor een persoonlijk consult en ontdek hoe esthetische geneeskunde uw natuurlijke schoonheid kan onthullen."
            )}
          </p>
          <CTAButton to="https://www.doctoranytime.be/nl/d/esthetisch-arts/marie-eve-bousmar">{t("Prendre rendez-vous", "Maak een afspraak")}</CTAButton>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
