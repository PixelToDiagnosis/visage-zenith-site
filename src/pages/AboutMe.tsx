import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import doctorImage from "@/assets/doctor-portrait.jpg";
import { Award, GraduationCap, Heart, Stethoscope } from "lucide-react";

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
              {t("À propos de Dr Marie-Eve Bousmar", "Over Dr Marie-Eve Bousmar")}
            </h1>
            <p className="body-text mb-4">
              {t(
                "Passionnée par la beauté naturelle et l'harmonie du visage, Dr Marie-Eve Bousmar exerce la médecine esthétique depuis plus de 15 ans. Son approche allie expertise médicale pointue et sensibilité artistique pour offrir à chaque patient un résultat sur mesure.",
                "Gepassioneerd door natuurlijke schoonheid en gezichtsharmonie, oefent Dr Marie-Eve Bousmar al meer dan 15 jaar esthetische geneeskunde uit. Haar aanpak combineert scherpe medische expertise met artistieke gevoeligheid om elke patiënt een resultaat op maat te bieden."
              )}
            </p>
            <p className="body-text">
              {t(
                "Chaque consultation est un moment d'écoute et d'échange, où vos souhaits et vos attentes sont au centre de la démarche thérapeutique.",
                "Elk consult is een moment van luisteren en uitwisselen, waar uw wensen en verwachtingen centraal staan in de therapeutische aanpak."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeading title={t("Parcours & Expertise", "Opleiding & Expertise")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, title: t("Formation médicale", "Medische opleiding"), desc: t("Doctorat en médecine, Université Libre de Bruxelles", "Doctoraat in de geneeskunde, Vrije Universiteit Brussel") },
              { icon: Award, title: t("Spécialisation", "Specialisatie"), desc: t("Diplôme universitaire en médecine esthétique et anti-âge", "Universitair diploma in esthetische en anti-aging geneeskunde") },
              { icon: Stethoscope, title: t("Expérience", "Ervaring"), desc: t("Plus de 15 ans d'expérience en injections et traitements esthétiques", "Meer dan 15 jaar ervaring in injecties en esthetische behandelingen") },
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
