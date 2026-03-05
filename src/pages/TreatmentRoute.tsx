import TreatmentPage from "@/components/TreatmentPage";
import { treatmentsData } from "@/data/treatments";
import NotFound from "./NotFound";

const TreatmentRoute = ({ slug }: { slug: string }) => {
  const data = treatmentsData[slug];
  if (!data) return <NotFound />;
  return <TreatmentPage data={data} />;
};

export default TreatmentRoute;
