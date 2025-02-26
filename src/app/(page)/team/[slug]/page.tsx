import ListTeams from "@/app/Components/Teams/ListTeams";
import PopUpTeam from "@/app/Components/Teams/PopUpTeam";

const DetailsPage = ({ params }: { params: { slug: string } }) => {
  const getActivedParams = params.slug;
  return (
    <div className="h-fit w-full overflow-y-hidden">
      <PopUpTeam id={getActivedParams} />
      <ListTeams />
    </div>
  );
};

export default DetailsPage;
