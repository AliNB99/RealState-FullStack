import Image from "next/image";
import Link from "next/link";

function NotFoundProductPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5 font-bold">
      <Image src="/notFound.svg" width={400} height={500} />
      <h1>محصولی که به دنبال آن هستید یافت نشد!!</h1>
      <Link
        href="/products"
        className="bg-inherit text-yellow-500 border-2 border-yellow-500 px-5 py-2 rounded-lg"
      >
        بازگشت به صفحه محصولات
      </Link>
    </div>
  );
}

export default NotFoundProductPage;
