import get_data_user from "./getUser.js";
import delete_data_user from "./deleteUser.js";
import createUser from "./createUser.js";

export const create_users = async (req, res) => {
  const { Name, userId, icon, type } = req.query;
  try {
    const { msg, statuscode } = await createUser(Name, userId, icon, type);
    res.status(201).json({
      msg: msg,
      statuscode: statuscode,
    });
    console.log("berhasil")
  } catch (error) {
    res.status(500).json({
      msg: msg,
      statuscode: statuscode,
    });
  }
};

export const get_user = async (req, res) => {
  const { datas, msg, statuscode } = await get_data_user();
  try {
    res.status(200).json({
      msg: msg,
      statuscode: statuscode,
      response: datas,
    });
    console.log("berhasill")
  } catch (err) {
    res.status(500).json({
      msg: statuscode,
      response: err,
    });
    console.log(err)
  }
};

export const delete_user = async (req, res) => {
  const { userId_delete } = req.params;
  if (!userId_delete) res.json({ msg: "id tidak angka", statuscode: 500 });

  try {
    const { statuscode, details, msg } = await delete_data_user(userId_delete);
    res.status(201).json({
      statuscode: statuscode,
      details: details,
      msg: msg,
    });
    console.log("berhasil", msg)
  } catch (error) {
    res.status(201).json({
      statuscode: statuscode,
      details: error,
      msg: msg,
    });
    console.log(err)
  }
};
