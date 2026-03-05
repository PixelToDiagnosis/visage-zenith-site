import { useParams } from "react-router-dom";
import TreatmentPage from "@/components/TreatmentPage";
import { treatmentsData } from "@/data/treatments";
import NotFound from "./NotFound";

const TreatmentRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? treatmentsData[slug] : undefined;

  if (!data) return <NotFound />;

  return <TreatmentPage data={data} />;
};

export default TreatmentRoute;
