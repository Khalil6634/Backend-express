import get_data_user from "./Admin/getUser.js";
import delete_data_user from "./Admin/deleteUser.js";
import createUser from "./User/signUp/createUser.js";
import read_data_user from "./Admin/readDataUser.js";
import UpdateItem from "./Material/updateItem/updateItem.js";

import { handlerPrisma, StatusCode } from "../utils/errorHandle.js";

export const createUsers = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const { msg, statuscode, details } = await createUser(
      firstName,
      lastName,
      password
    );
    res.status(201).json({
      msg: msg,
      statuscode: statuscode,
      details: details,
    });
    console.log("berhasil");

  } catch (error) {
    console.log(error)
    if (error.code) {
      const handlerError = handlerPrisma(error)
      next(handlerError)
    }
    next(error)
  }
};

export const getUsers = async (req, res, next) => {
  const { datas, msg, statuscode } = await get_data_user();
  try {
    res.status(200).json({
      msg: msg,
      statuscode: statuscode,
      response: datas,
    });
    console.log("berhasill");
  } catch (err) {
    if (err.code) {
      const handlerError = handlerPrisma(err)
      return next(handlerError)
    }
    return next(err)
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if ((id !== typeof id) !== "Number")
    res.json({ msg: "id tidak angka", statuscode: 400 });

  try {
    const { statuscode, details, msg } = await delete_data_user(id);
    res.status(201).json({
      statuscode: statuscode,
      details: details,
      msg: msg,
    });

    console.log("berhasil", msg);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      statuscode: 500,
      details: error,
      msg: msg,
    });
  }
};

export const FindUser = async (req, res) => {
  const { Name } = req.query;

  if ((!Name != typeof Name) !== "String")
    return { msg: "Input not character!!", statuscode: 400, result: {} };

  try {
    const { msg, result, statuscode } = await read_data_user(Name);
    console.log("berhasil menemukan user!!");

    res.send({ result });
    res.status(201).json({
      msg: msg,
      statuscode: statuscode,
      result: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Error in internal server!!",
      statuscode: 500,
      result: {},
    });
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const { Name, icon, type } = req.body;

  try {
    const { msg, statusCode, response } = UpdateItem(Name, id, type, icon);
    res.status(201).json({
      msg,
      statusCode: statusCode,
      response: response,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Error In Internal Server!!",
      statusCode: 500,
      response: err,
    });
  }
};
