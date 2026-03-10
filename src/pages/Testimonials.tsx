import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sophie L.", fr: "J'ai été voir le Dr Marie-Eve Bousmar pour ma toute première injection de Botox dans le front. J'étais fort stressée mais le Dr Bousmar est très compréhensive, rassurante et douce dans ses manoeuvres. Tout s'est très bien déroulée et je la recommande vivement, sans hésitation, pour son professionnalisme et sa bienveillance !", nl: "Ik ging naar Dr. Marie-Eve Bousmar voor mijn allereerste Botox-injectie in het voorhoofd. Ik was erg gestrest, maar Dr. Bousmar is heel begripvol, geruststellend en zacht in haar handelingen. Alles is heel goed verlopen en ik beveel haar van harte aan, zonder aarzeling, voor haar professionalisme en welwillendheid!", rating: 5, treatment: "Botox" },
  { name: "Marie V.", fr: "J'avais peur des injections mais j'ai été rassurée dès la première consultation. Résultat magnifique.", nl: "Ik was bang voor injecties maar werd gerustgesteld vanaf het eerste consult. Prachtig resultaat.", rating: 5, treatment: "Lèvres" },
  { name: "Isabelle D.", fr: "La praticienne est très à l'écoute et prend vraiment son temps à chaque consultation. Elle est méticuleuse et très gentille (ce qui ne gâche rien). Tout est fait de façon à ce que vous soyez très renseignée et très à l'aise avec votre choix. Le résultat est sublime en ce qui me concerne. Je recommande chaudement.", nl: "De arts luistert heel goed en neemt echt de tijd bij elk consult. Ze is nauwkeurig en heel vriendelijk (wat zeker geen nadeel is). Alles wordt gedaan zodat u goed geïnformeerd bent en u heel comfortabel voelt bij uw keuze. Het resultaat is subliem wat mij betreft. Ik beveel haar warm aan.", rating: 5, treatment: "Acide hyaluronique" },
  { name: "Catherine M.", fr: "Le microneedling a transformé ma peau. Je recommande vivement cette clinique.", nl: "Microneedling heeft mijn huid getransformeerd. Ik beveel deze kliniek ten zeerste aan.", rating: 5, treatment: "Microneedling" },
  { name: "Anne B.", fr: "C'était juste parfait. Le Docteur Bousmar est très consciencieuse, elle s'assure que tout se passe bien et elle prône le naturel. Le Docteur Bousmar devient ma médecin esthétique pour la vie. Que ca soit injection de botox, skinbooster, acide hyaluronique ou encore d'autres traitements, je lui fais confiance les yeux fermés.", nl: "Het was gewoon perfect. Dokter Bousmar is zeer consciëntieus, ze zorgt ervoor dat alles goed verloopt en ze staat voor een natuurlijk resultaat. Dokter Bousmar wordt mijn esthetisch arts voor het leven. Of het nu gaat om botox-injecties, skinboosters, hyaluronzuur of andere behandelingen, ik vertrouw haar blindelings.", rating: 5, treatment: "Skin Boosters" },
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
