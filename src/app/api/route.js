import ProfileRealState from "@/models/ProfileRealState";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const profiles = await ProfileRealState.find({ published: true }).select(
      "-userId"
    );

    return NextResponse.json(
      {
        data: profiles,
      },
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
