import ProfileRealState from "@/models/ProfileRealState";
import UserRealState from "@/models/UserRealState";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const id = context.params.itemId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }

    const user = await UserRealState.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        { status: 404 }
      );
    }
    const profile = await ProfileRealState.findOne({ _id: id });
    if (!user._id.equals(profile.userId) && user.role !== "ADMIN") {
      return NextResponse.json(
        {
          error: "دسترسی شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );
    }

    await ProfileRealState.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "آگهی موردنظر حذف شد" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
