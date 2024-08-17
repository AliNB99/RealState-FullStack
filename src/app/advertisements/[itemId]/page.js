import ProfileRealState from "@/models/ProfileRealState";
import DetailPage from "@/templates/DetailPage";
import NotFoundProductPage from "@/templates/NotFoundProductPage";
import connectDB from "@/utils/connectDB";

async function advertisingDetail({ params: { itemId } }) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  let advertising;

  try {
    advertising = await ProfileRealState.findOne({ _id: itemId });
  } catch (error) {
    return <NotFoundProductPage />;
  }
  return (
    <div>
      <DetailPage data={JSON.parse(JSON.stringify(advertising))} />
    </div>
  );
}

export default advertisingDetail;

export const generateMetadata = async ({ params: { itemId } }) => {
  await connectDB();
  const advertising = await ProfileRealState.findOne({ _id: itemId });
  return {
    title: advertising.title,
    description: advertising.description,
    author: { author: advertising.realEstate },
  };
};
