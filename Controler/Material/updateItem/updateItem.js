import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const NowDate = new Date().toISOString();

const UpdateItem = async (Name, id, icon, type) => {
  try {
    const Update = prisma.category.update({
      where: {
        userId : id
      },
      data: {
        createAt: NowDate,
        name: Name,
        icon: icon,
        type: type,
      },
    });
    return {
      msg: "Acount Succesfully Changed!!",
      statusCode: 201,
      response: Update,
    };
  } catch (err) {
    return {
      msg: "Error in internal Database!!",
      statusCode: 501,
      response: err,
    };
  }
};

export default UpdateItem;
