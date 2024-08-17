import Link from "next/link";
import { PiUserList } from "react-icons/pi";
import { LuListRestart } from "react-icons/lu";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi2";

function MobileDesktopDashboard({ role, deleteHandler }) {
  return (
    <sidebar className="z-50 flex sm:hidden justify-center shadow-normal fixed left-0 bottom-0 w-full p-4 bg-white">
      <div
        className={`w-full grid ${
          role === "ADMIN" ? "grid-cols-5" : "grid-cols-4"
        } gap-5 *:text-center *:p-1 *:rounded-lg *:text-sm *:font-semibold *:text-blue-500`}
      >
        <Link
          className="flex flex-col items-center justify-center"
          href="/dashboard"
        >
          <HiOutlineUserCircle size={20} />
          <span className="text-xs font-medium">داشبورد</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center"
          href="/dashboard/my-advertisements"
        >
          <PiUserList size={20} />
          <span className="text-xs font-medium">آگهی های من</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center"
          href="/dashboard/add"
        >
          <MdOutlineAddBox size={20} />
          <span className="text-xs font-medium">افزودن آگهی</span>
        </Link>
        {role === "ADMIN" && (
          <Link
            className="flex flex-col items-center justify-center"
            href="/admin"
          >
            <LuListRestart size={20} />
            <span className="text-xs font-medium  ">تایید آگهی</span>
          </Link>
        )}
        <button
          onClick={deleteHandler}
          className="flex flex-col items-center justify-center *:font-medium"
        >
          <AiOutlinePoweroff size={20} className="text-red-500" />
          <span className="text-red-500 text-xs">خروج</span>
        </button>
      </div>
    </sidebar>
  );
}

export default MobileDesktopDashboard;
