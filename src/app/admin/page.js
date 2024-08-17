import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserRealState from "@/models/UserRealState";
import DashboardSidebar from "@/templates/DashboardSidebar";
import AdminPage from "@/templates/AdminPage";
import ProfileRealState from "@/models/ProfileRealState";
import { redirect } from "next/dist/server/api-utils";
import connectDB from "@/utils/connectDB";

export const metadata = {
  title: "پنل ادمین | املاک",
};

async function Admin() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await UserRealState.findOne({ email: session.user.email });
  const { role, email } = user;
  if (role !== "ADMIN") redirect("/dashboard");

  const advertisements = await ProfileRealState.find({ published: false });

  return (
    <DashboardSidebar email={email} role={role}>
      <AdminPage
        role={role}
        advertisements={JSON.parse(JSON.stringify(advertisements))}
      />
    </DashboardSidebar>
  );
}

export default Admin;
