import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const get_data_user = async () => {
  try {
    const many_datas = await prisma.category.findMany();
    return {
      statuscode: 200,
      msg: "get succeded",
      datas: many_datas,
    };
  } catch (error) {
    console.log(error);
    return {
      statuscode: 500,
      msg: error,
    };
  }
};

export default get_data_user;