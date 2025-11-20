import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();
const DateNow = new Date().toISOString();

const createUser = async (firstName, lastName, email, password) => {
  try {
    const newUser = await prismaClient.user.create({
      data: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        created_at: DateNow,
      },
    });
    return {
      msg: "User berhasil dibuat, selamatt datang",
      statuscode: 201,
      details: newUser,
    };
  } catch (error) {
    console.log(error);
    return {
      msg: "Error in internal prisma!!",
      statuscode: 500,
      details: error,
    };
  }
};

export default createUser;
