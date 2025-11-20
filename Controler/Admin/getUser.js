import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const get_data_user = async () => {
  try {
    const manyDatas = await prisma.user.findMany()
    return {
      statuscode: 200,
      msg: "get succeded",
      datas: manyDatas,
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
