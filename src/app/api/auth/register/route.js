import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { email, password, name } = await req.json();

  await connect();
  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    return new NextResponse("User has been created successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
