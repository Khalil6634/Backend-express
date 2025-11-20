import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const read_data_user = async (NameUser) => {
  try {
    const Result = await prisma.category.findFirst({
      where: { nama: NameUser },
    });

    if (!Result)
      return { msg: "Result not found!!", statuscode: 404, result: Result };

    console.log("berhasilll")
    return {
      msg: "data found!!",
      statuscode: 200,
      result: Result,
    };
  } catch (error) {
    console.log(error);
    return {
      msg: "Error in internal server!!",
      statuscode: 500,
      result: {},
    };
  }
};

export default read_data_user;
