import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const DateNow = new Date().toISOString();

const createUser = async (Name, userId, type, icon) => {
  try {
    const Newuser = await prisma.category.create({
      data: {
        name: Name,
        userId: userId,
        icon: icon,
        type: type,
      },
    });
    if (!Newuser) return { msg: "", statuscode: 400 };
    return {
      msg: "data created succes!!",
      statuscode: 201,
    };
  } catch (err) {
    return {
      msg: "error in server!!",
      statuscode: 500,
    };
  }
};

export default createUser;