import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import DashboardSidebar from "@/templates/DashboardSidebar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserRealState from "@/models/UserRealState";

export const metadata = {
  title: "پنل کاربری | املاک",
};

async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  const user = await UserRealState.findOne({ email: session.user.email });
  if (!user) {
    return redirect("/");
  }

  return (
    <DashboardSidebar email={user.email} role={user.role}>
      {children}
    </DashboardSidebar>
  );
}

export default layout;
