import Image from "next/image";
import Link from "next/link";

import snappIcon from "../../public/icons/snappLogo.svg";
import twitterIcon from "../../public/icons/twitter.png";
import telegramIcon from "../../public/icons/telegram.png";
import linkedinIcon from "../../public/icons/linkedin.png";
import instaIcon from "../../public/icons/insta.png";
import aparatIcon from "../../public/icons/aparat.png";
import senfIcon from "../../public/images/Footer/senf.png";

const Footer = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row my-2 md:my-0 justify-between ">
        <div className="flex justify-between my-4 md:my-0">
          <div className="md:p-2">
            <Image src={snappIcon} className="pt-1" />
          </div>
          <div className="flex flex-col">
            <div className="p-2">
              <div className="text-myPink font-bold text-lg">اسنپ‌فود</div>
              <div className="text-gray-400 text-xs">
                تجربه سفارش غذا، از زودفود تا اسنپ‌فود
              </div>
            </div>
            <div className="flex justify-between w-64">
              <Link
                href={""}
                className="rounded-full w-10 h-10 shadow-lg bg-white flex justify-center items-center border border-gray-300"
              >
                <Image src={twitterIcon} className="w-6 h-6" />
              </Link>
              <Link
                href={""}
                className="rounded-full w-10 h-10 shadow-lg bg-white flex justify-center items-center border border-gray-300"
              >
                <Image src={telegramIcon} className="w-6 h-6" />
              </Link>
              <Link
                href={""}
                className="rounded-full w-10 h-10 shadow-lg bg-white flex justify-center items-center border border-gray-300"
              >
                <Image src={linkedinIcon} className="w-6 h-6" />
              </Link>
              <Link
                href={""}
                className="rounded-full w-10 h-10 shadow-lg bg-white flex justify-center items-center border border-gray-300"
              >
                <Image src={instaIcon} className="w-6 h-6" />
              </Link>
              <Link
                href={""}
                className="rounded-full w-10 h-10 shadow-lg bg-white flex justify-center items-center border border-gray-300"
              >
                <Image src={aparatIcon} className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:w-1/3">
          <div className="flex flex-col text-xs text-gray-700">
            <Link className="py-2" href={""}>
              درباره اسنپ‌فود
            </Link>
            <Link className="py-2" href={""}>
              فرصت‌های شغلی
            </Link>
            <Link className="py-2" href={""}>
              وبلاگ
            </Link>
            <Link className="py-2" href={""}>
              قوانین سایت
            </Link>
            <Link className="py-2" href={""}>
              حریم خصوصی
            </Link>
            <Link className="py-2" href={""}>
              ثبت‌نام فروشندگان
            </Link>
          </div>
          <div className="flex flex-col text-xs text-gray-700">
            <Link className="py-2" href={""}>
              تماس با اسنپ‌فود
            </Link>
            <Link className="py-2" href={""}>
              پرسش‌های متداول
            </Link>
            <Link className="py-2" href={""}>
              ثبت شکایت
            </Link>
            <Link className="py-2" href={""}>
              اپلیکیشن موبایل
            </Link>
          </div>
        </div>
        <div className="flex justify-end md:block">
          <Image src={senfIcon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
