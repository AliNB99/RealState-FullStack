import UserRealState from "@/models/UserRealState";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardPage from "@/templates/DashboardPage";
import connectDB from "@/utils/connectDB";

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await UserRealState.findOne({ email: session.user.email });
  return <DashboardPage createAt={user.createAt} />;
}

export default Dashboard;
