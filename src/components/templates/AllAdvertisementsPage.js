import MainTitle from "@/elements/MainTitle";
import Card from "@/modules/Card";
import Sidebar from "@/modules/Sidebar";

async function AllAdvertisementsPage({ data, category }) {
  return (
    <div className="h-full flex relative gap-10">
      <Sidebar category={category} />

      {!data.length ? (
        <div className="w-full mt-20 md:m-0">
          <MainTitle color="text-red-500" bgColor="bg-red-100">
            هیچ آگهی پیدا نشد!!
          </MainTitle>
        </div>
      ) : (
        <div className="mt-20 md:mt-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((i, index) => (
            <Card key={index} data={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllAdvertisementsPage;
