import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Image src="/404.rocket.svg" width={400} height={300} />
      <h1>صفحه مورد نظر پیدا نشده</h1>
      <Link
        href="/"
        className="bg-inherit flex items-center gap-3 text-blue-500 border-2 border-blue-500 px-5 py-2 rounded-lg"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
}

export default NotFound;
