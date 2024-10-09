import EmploymentHistoryCard from "@/components/employmenthistory";
import NavigationBar from "@/components/navigationbar";
import Primaryinfo from "@/components/primaryinformation";
import SkillsetCard from "@/components/skillsetcard";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div className="col-span-2 row-span-1 ">
          <div className="p-2">
            <Primaryinfo />
          </div>
          <div className="p-2">
            <EmploymentHistoryCard />
          </div>
        </div>
        <div className="col-span-1 row-span-1 p-2">
          <SkillsetCard />
        </div>
      </div>
    </>
  );
}
