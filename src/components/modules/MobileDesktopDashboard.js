import { CgLogOff, CgCheckO, CgAdd, CgProfile, CgMoreO } from "react-icons/cg";
import Link from "next/link";

const listDashboard = [
  {
    name: "dashboard",
    title: "داشبورد",
    icon: <CgProfile size={20} />,
    link: "/dashboard",
  },
  {
    name: "myAdvertising",
    title: "آگهی های من",
    icon: <CgMoreO size={20} />,
    link: "/dashboard/my-advertisements",
  },
  {
    name: "addAdvertising",
    title: "ثبت آگهی",
    icon: <CgAdd size={20} />,
    link: "/dashboard/add",
  },
  {
    name: "acceptingAdvertising",
    title: "تایید آگهی",
    icon: <CgCheckO size={20} />,
  },
  {
    name: "signOut",
    title: "خروج",
    icon: <CgLogOff size={20} className="text-red-500" />,
  },
];

function MobileDesktopDashboard({ role, deleteHandler }) {
  return (
    <sidebar className="z-50 flex md:hidden justify-center shadow-normal fixed left-0 bottom-0 w-full p-2 bg-white">
      <div
        className={`w-full grid ${
          role === "ADMIN" ? "grid-cols-5" : "grid-cols-4"
        } gap-5 *:text-center *:p-1 *:rounded-lg *:text-sm *:font-semibold *:text-blue-500`}
      >
        {listDashboard.map((i, index) =>
          i.name === "signOut" ? (
            <button
              key={index}
              onClick={deleteHandler}
              className="flex flex-col items-center justify-center gap-1 *:font-medium"
            >
              {i.icon}
              <span className="text-red-500 text-xs hidden xs:inline">
                {i.title}
              </span>
            </button>
          ) : i.name === "acceptedAdvertising" && role === "ADMIN" ? (
            <Link
              className="flex flex-col items-center justify-center gap-1"
              href="/admin"
            >
              {i.icon}
              <span className="text-xs font-medium hidden xs:inline">
                {i.title}
              </span>
            </Link>
          ) : (
            <Link
              className="flex flex-col items-center justify-center gap-1"
              href={i.link || ""}
            >
              {i.icon}
              <span className="text-xs font-medium hidden xs:inline">
                {i.title}
              </span>
            </Link>
          )
        )}
      </div>
    </sidebar>
  );
}

export default MobileDesktopDashboard;
