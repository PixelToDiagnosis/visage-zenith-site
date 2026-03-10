import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sophie L.", fr: "Un résultat très naturel, exactement ce que je voulais. Le Dr est à l'écoute et professionnelle.", nl: "Een heel natuurlijk resultaat, precies wat ik wilde. De dokter luistert en is professioneel.", rating: 5, treatment: "Botox" },
  { name: "Marie V.", fr: "J'avais peur des injections mais j'ai été rassurée dès la première consultation. Résultat magnifique.", nl: "Ik was bang voor injecties maar werd gerustgesteld vanaf het eerste consult. Prachtig resultaat.", rating: 5, treatment: "Lèvres" },
  { name: "Isabelle D.", fr: "La praticienne est très à l'écoute et prend vraiment son temps à chaque consultation. Elle est méticuleuse et très gentille (ce qui ne gâche rien). Tout est fait de façon à ce que vous soyez très renseignée et très à l'aise avec votre choix. Le résultat est sublime en ce qui me concerne. Je recommande chaudement.", nl: "De arts luistert heel goed en neemt echt de tijd bij elk consult. Ze is nauwkeurig en heel vriendelijk (wat zeker geen nadeel is). Alles wordt gedaan zodat u goed geïnformeerd bent en u heel comfortabel voelt bij uw keuze. Het resultaat is subliem wat mij betreft. Ik beveel haar warm aan.", rating: 5, treatment: "Acide hyaluronique" },
  { name: "Catherine M.", fr: "Le microneedling a transformé ma peau. Je recommande vivement cette clinique.", nl: "Microneedling heeft mijn huid getransformeerd. Ik beveel deze kliniek ten zeerste aan.", rating: 5, treatment: "Microneedling" },
  { name: "Anne B.", fr: "Très satisfaite du traitement skin boosters. Ma peau est lumineuse et hydratée.", nl: "Zeer tevreden over de skin boosters behandeling. Mijn huid is stralend en gehydrateerd.", rating: 5, treatment: "Skin Boosters" },
  { name: "Nathalie R.", fr: "Approche douce et résultats subtils. Personne ne sait que j'ai fait quelque chose, juste que j'ai l'air reposée.", nl: "Zachte aanpak en subtiele resultaten. Niemand weet dat ik iets heb laten doen, alleen dat ik er uitgerust uitzie.", rating: 5, treatment: "Botox" },
];

const Testimonials = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide">
        <SectionHeading
          title={t("Témoignages patients", "Patiënt ervaringen")}
          subtitle={t("Découvrez les expériences de nos patients", "Ontdek de ervaringen van onze patiënten")}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-cream p-8 rounded-sm border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="body-small italic mb-4">"{lang === "fr" ? r.fr : r.nl}"</p>
              <div className="flex justify-between items-center">
                <p className="font-serif text-sm font-medium">{r.name}</p>
                <span className="text-xs text-gold uppercase tracking-wide">{r.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
