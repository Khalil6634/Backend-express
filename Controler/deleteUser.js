import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const delete_data_user = async (user_id) => {
  try {
    const deleted_user = await prisma.category.delete({
      where: { userId: user_id },
    });

    if (!delete_data_user)
      return { msg: "datas not found", statuscode: 404, details: {} };

    return {
      msg: "delete data users succed!!",
      statuscode: 201,
      details: delete_data_user,
    };
  } catch (error) {
    return {
      msg: "error in server",
      statuscode: 500,
      details: {},
    };
  }
};

export default delete_data_user