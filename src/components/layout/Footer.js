import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col bg-blue-500 text-white mx-4 mb-28 sm:mb-10 mt-16 p-5 rounded-md">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">سامانه خرید و اجاره ملک</h3>
          <p className="text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="flex justify-start gap-20 md:gap-0">
          <ul className="md:w-56 gap-4 mr-4 list-disc *:font-semibold space-y-2">
            <li>تعرفه قانونی</li>
            <li>دسترسی سریع</li>
            <li>مشاورین خبره</li>
            <li>قولنامه محضری</li>
          </ul>
          <ul className="md:w-56 gap-4 mr-4 list-disc *:font-semibold space-y-2">
            <li>تماس با ما</li>
            <li>درباره ما</li>
            <li>فضای مجازی</li>
            <li>گزارش خطا</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <h1>توسعه داده شده با ❤️ توسط</h1>
        <Link
          className="hover:underline transition-all"
          href="https://github.com/AliNB99"
        >
          AliNB99
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
