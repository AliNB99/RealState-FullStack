"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../elements/Loader";
import { useRouter } from "next/navigation";
import FormInput from "../modules/FormInput";
import FormButton from "../elements/FormButton";
import { signIn, useSession } from "next-auth/react";

function SigninPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const session = useSession();
  if (session.status === "authenticated") {
    router.push("/");
  }

  const submitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    setIsLoading(false);
    if (!data.error) {
      router.push("/");
      return toast.success("شما با موفقیت وارد حساب کاربری خود شدید");
    } else {
      return toast.error(data.error);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-5">
      <form
        onSubmit={submitHandler}
        className="w-full md:w-96 sm:shadow-normal px-7 py-10 rounded-md flex flex-col gap-6"
      >
        <h1 className="text-blue-500 text-3xl font-semibold text-center">
          ورود
        </h1>
        <FormInput
          type="text"
          name="email"
          placeholder="لطفا ایمیل خود را وارد نمایید"
          form={form}
          setForm={setForm}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="لطفا رمز عبور خود را وارد نمایید"
          form={form}
          setForm={setForm}
        />

        {isLoading ? (
          <Loader color="#3B82F6" />
        ) : (
          <FormButton bgColor="bg-blue-500" color="text-white">
            ورود
          </FormButton>
        )}
        <div className="flex jusc gap-2">
          <span>آیا حساب ندارید؟</span>
          <Link
            className="text-blue-500 inline-block hover:underline transition-all"
            href="/signup"
          >
            ثبت نام
          </Link>
        </div>
      </form>
      <div>
        <div className="w-80 border-2 space-y-5 border-blue-300 rounded-lg text-sm font-bold p-3">
          <div className="flex items-center justify-between">
            <h4 className="text-blue-500 font-medium">ایمیل پنل ادمین</h4>
            <span className="text-zinc-600 font-medium">
              ali.nadimi313@gmail.com
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-blue-500 font-medium">رمز عبور</h4>
            <span className="text-zinc-600 font-medium">123456</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
