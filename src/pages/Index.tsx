import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import heroImage from "@/assets/hero-clinic.jpg";
import doctorImage from "@/assets/doctor-portrait.jpg";
import consultationImage from "@/assets/treatment-consultation.jpg";
import { Star, Sparkles, Heart, Shield, Clock, Users } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

  const treatments = [
    { slug: "botox", name: "Botox", desc: t("Rides d'expression, front, rides du lion", "Expressierimpels, voorhoofd, fronsrimpels") },
    { slug: "acide-hyaluronique", name: t("Acide hyaluronique", "Hyaluronzuur"), desc: t("Volume, hydratation, rajeunissement", "Volume, hydratatie, verjonging") },
    { slug: "injection-levres", name: t("Lèvres", "Lippen"), desc: t("Volume naturel et définition", "Natuurlijk volume en definitie") },
    { slug: "skin-boosters", name: "Skin Boosters", desc: t("Hydratation profonde, éclat", "Diepe hydratatie, glans") },
    { slug: "services", name: t("Inducteurs de collagène", "Collageenstimulatie"), desc: t("Stimulation naturelle du collagène, fermeté", "Natuurlijke collageenstimulatie, stevigheid") },
  ];

  const testimonials = [
    { name: "Sophie L.", text: t("Un résultat très naturel, exactement ce que je voulais. Le Dr est à l'écoute et professionnelle.", "Een heel natuurlijk resultaat, precies wat ik wilde. De dokter luistert en is professioneel."), rating: 5 },
    { name: "Marie V.", text: t("J'avais peur des injections mais j'ai été rassurée dès la première consultation. Résultat magnifique.", "Ik was bang voor injecties maar werd gerustgesteld vanaf het eerste consult. Prachtig resultaat."), rating: 5 },
    { name: "Isabelle D.", text: t("Clinique élégante, personnel accueillant. Mon traitement botox est parfait et naturel.", "Elegante kliniek, vriendelijk personeel. Mijn botoxbehandeling is perfect en natuurlijk."), rating: 5 },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt={t("Clinique esthétique élégante", "Elegante esthetische kliniek")} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative container-wide px-6 py-20">
          <div className="max-w-2xl">
            <div className="gold-line mb-8" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-off-white mb-6">
              {t(
                "Révélez votre beauté naturelle grâce à la médecine esthétique.",
                "Ontdek uw natuurlijke schoonheid met esthetische geneeskunde."
              )}
            </h1>
            <p className="font-sans text-base md:text-lg font-light text-off-white/80 mb-10 max-w-lg">
              {t(
                "Des traitements personnalisés pour un résultat naturel et harmonieux.",
                "Gepersonaliseerde behandelingen voor een natuurlijk en harmonieus resultaat."
              )}
            </p>
            <CTAButton to="/contact">
              {t("Prendre rendez-vous", "Maak een afspraak")}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Doctor Introduction */}
      <section className="section-padding bg-off-white">
        <div className="container-wide grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <img src={doctorImage} alt={t("Portrait du médecin", "Portret van de arts")} className="w-full max-w-md mx-auto rounded-sm shadow-lg" />
          </div>
          <div>
            <div className="gold-line mb-6" />
            <h2 className="heading-section mb-6">
              {t("Dr Marie-Eve Bousmar", "Dr Marie-Eve Bousmar")}
            </h2>
            <p className="body-text mb-4">
              {t(
                "Médecin esthétique passionnée, je m'engage à offrir des soins personnalisés qui respectent votre beauté naturelle. Mon approche combine expertise médicale et sensibilité artistique pour des résultats harmonieux.",
                "Als gepassioneerd esthetisch arts zet ik me in om gepersonaliseerde zorg te bieden die uw natuurlijke schoonheid respecteert. Mijn aanpak combineert medische expertise met artistieke gevoeligheid voor harmonieuze resultaten."
              )}
            </p>
            <p className="body-text mb-8">
              {t(
                "Diplômée en médecine et spécialisée en esthétique, j'exerce depuis plus de 15 ans dans le domaine de la médecine anti-âge et des injections.",
                "Gediplomeerd in de geneeskunde en gespecialiseerd in esthetiek, ben ik al meer dan 15 jaar actief op het gebied van anti-aging geneeskunde en injecties."
              )}
            </p>
            <CTAButton to="/about" variant="outline">
              {t("En savoir plus", "Meer weten")}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeading
            title={t("Nos traitements populaires", "Onze populaire behandelingen")}
            subtitle={t("Des solutions éprouvées pour sublimer votre beauté naturelle", "Bewezen oplossingen om uw natuurlijke schoonheid te verbeteren")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((tr) => (
              <a
                key={tr.slug}
                href={`/${tr.slug}`}
                className="group bg-off-white p-8 rounded-sm border border-border hover:shadow-lg transition-all duration-300"
              >
                <Sparkles className="w-6 h-6 text-gold mb-4" />
                <h3 className="font-serif text-xl mb-2 group-hover:text-accent transition-colors">{tr.name}</h3>
                <p className="body-small">{tr.desc}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton to="/services" variant="outline">
              {t("Voir tous les traitements", "Bekijk alle behandelingen")}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-off-white">
        <div className="container-narrow text-center">
          <SectionHeading
            title={t("Notre philosophie", "Onze filosofie")}
            subtitle={t("Le naturel avant tout", "Natuurlijkheid boven alles")}
          />
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: t("Résultats naturels", "Natuurlijke resultaten"), desc: t("Nous valorisons la subtilité et l'harmonie dans chaque traitement.", "Wij waarderen subtiliteit en harmonie bij elke behandeling.") },
              { icon: Shield, title: t("Sécurité", "Veiligheid"), desc: t("Produits certifiés et techniques médicales éprouvées.", "Gecertificeerde producten en bewezen medische technieken.") },
              { icon: Users, title: t("Approche personnalisée", "Persoonlijke aanpak"), desc: t("Chaque patient reçoit un plan de traitement sur mesure.", "Elke patiënt krijgt een behandelplan op maat.") },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="body-small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-beige">
        <div className="container-wide">
          <SectionHeading
            title={t("Témoignages patients", "Patiënt ervaringen")}
            subtitle={t("La confiance de nos patients est notre plus belle récompense", "Het vertrouwen van onze patiënten is onze mooiste beloning")}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-off-white p-8 rounded-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="body-small italic mb-4">"{item.text}"</p>
                <p className="font-serif text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <SectionHeading
            title={t("Résultats avant / après", "Resultaten voor / na")}
            subtitle={t("Des transformations subtiles et naturelles", "Subtiele en natuurlijke transformaties")}
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {[t("Botox front", "Botox voorhoofd"), t("Lèvres", "Lippen"), t("Acide hyaluronique", "Hyaluronzuur")].map((label, i) => (
              <div key={i} className="bg-beige rounded-sm aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-taupe mx-auto mb-2" />
                  <p className="body-small">{label}</p>
                  <p className="text-xs text-taupe mt-1">{t("Bientôt disponible", "Binnenkort beschikbaar")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Preview */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeading
            title={t("Conseils & Expertise", "Tips & Expertise")}
            subtitle={t("Des articles pour prendre soin de votre peau", "Artikelen om voor uw huid te zorgen")}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: t("Les 5 gestes anti-âge essentiels", "De 5 essentiële anti-aging tips"), cat: t("Anti-âge", "Anti-aging") },
              { title: t("Botox : mythes et réalités", "Botox: mythes en feiten"), cat: "Botox" },
              { title: t("Comment préparer sa peau avant un peeling", "Hoe bereidt u uw huid voor op een peeling"), cat: "Peelings" },
            ].map((tip, i) => (
              <div key={i} className="bg-off-white p-8 rounded-sm border border-border">
                <span className="text-xs uppercase tracking-widest text-gold">{tip.cat}</span>
                <h3 className="font-serif text-lg mt-2 mb-3">{tip.title}</h3>
                <p className="body-small">{t("Lire l'article →", "Lees het artikel →")}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/tips" variant="outline">
              {t("Tous les conseils", "Alle tips")}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={consultationImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-off-white mb-6">
            {t("Prêt(e) à révéler votre beauté naturelle ?", "Klaar om uw natuurlijke schoonheid te onthullen?")}
          </h2>
          <p className="font-sans text-base font-light text-off-white/80 mb-10 max-w-lg mx-auto">
            {t(
              "Réservez votre consultation personnalisée et découvrez les traitements adaptés à vos besoins.",
              "Boek uw persoonlijk consult en ontdek de behandelingen die bij uw behoeften passen."
            )}
          </p>
          <CTAButton to="/contact">
            {t("Prendre rendez-vous", "Maak een afspraak")}
          </CTAButton>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section-padding bg-off-white">
        <div className="container-narrow text-center">
          <SectionHeading title="Contact" />
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { label: t("Téléphone", "Telefoon"), value: "+32 2 123 45 67" },
              { label: "Email", value: "info@dr-esthetique.be" },
              { label: t("Adresse", "Adres"), value: "Bruxelles, Belgique" },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-serif text-lg mb-1">{item.label}</p>
                <p className="body-small">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
