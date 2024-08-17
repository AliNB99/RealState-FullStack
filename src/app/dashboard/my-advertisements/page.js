import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserRealState from "@/models/UserRealState";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import MyAdvertisementsPage from "src/components/templates/MyAdvertisementsPage";

async function MyAdvertisements() {
  await connectDB();
  const {
    user: { email },
  } = await getServerSession(authOptions);

  const [user] = await UserRealState.aggregate([
    {
      $match: { email },
    },
    {
      $lookup: {
        from: "profilerealstates",
        foreignField: "userId",
        localField: "_id",
        as: "myAdvertisements",
      },
    },
  ]);
  return (
    <div>
      <MyAdvertisementsPage user={user} />
    </div>
  );
}

export default MyAdvertisements;
