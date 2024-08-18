import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const listDashboard = [
  {
    name: "dashboard",
    title: "حساب کاربری",
    link: "/dashboard",
  },
  {
    name: "myAdvertising",
    title: "آگهی های من",
    link: "/dashboard/my-advertisements",
  },
  {
    name: "addAdvertising",
    title: "ثبت آگهی",
    link: "/dashboard/add",
  },
  {
    name: "acceptingAdvertising",
    title: "در انتظار تایید",
    link: "/admin",
  },
];

function DesktopDashboardSidebar({ deleteHandler, role, email }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <sidebar className="hidden md:block shadow-normal bg-white w-64 h-fit p-5 rounded-md space-y-8">
      <div className="flex flex-col items-center gap-3 border-b-2 py-2">
        <FaRegUserCircle size={40} className="text-blue-600" />
        <div className="text-center text-zinc-400">
          {role === "ADMIN" && <span>ادمین</span>}
          <p>{email}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 *:text-black *:font-medium">
        {listDashboard.map((i, index) =>
          i.name === "acceptingAdvertising" && role === "ADMIN" ? (
            <Link
              className={`${
                i.link === pathName &&
                "bg-blue-100 py-1 px-2 rounded-lg transition-all scale-y-105"
              }`}
              key={index}
              href={i.link}
            >
              در انتظار تایید
            </Link>
          ) : (
            <Link
              className={`${
                i.link === pathName &&
                "bg-blue-100 py-1 px-2 rounded-lg transition-all scale-y-105"
              }`}
              key={index}
              href={i.link}
            >
              {i.title}
            </Link>
          )
        )}
      </div>
      <button
        onClick={deleteHandler}
        className="text-red-500 flex items-center gap-2 *:font-medium"
      >
        <LuLogOut />
        <span>خروج</span>
      </button>
    </sidebar>
  );
}

export default DesktopDashboardSidebar;
