import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const delete_data_user = async (user_id) => {
  const idUser = String(user_id)
  try {
    await prisma.category.delete({
      where: { userId: idUser},
    });

    return {
      msg: "delete data users succed!!",
      statuscode: 201
    };
    
  } catch (error) {
    return {
      msg: error,
      statuscode: 500,
    };
  }
};

export default delete_data_user