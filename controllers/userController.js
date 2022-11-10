const { validationResult } = require("express-validator");
const { bcryptjs, compare } = require("bcryptjs");
const path = require("path");
const db = require("../database/models");

module.exports = {
  register: (req, res) => {
    return res.render("register", {
      title: "Register",
    });
  },
  processRegister: async (req, res) => {
    const {
      firstname,
      lastname,
      email,
      password,
      rolid,
      avatar,
      document,
      nationality,
      birthday,
    } = req.body;

    const { id, rol_id } = await db.User.create({
      firstname: firstname?.trim(),
      lastname: lastname?.trim(),
      email: email?.trim(),
      password: password,
      rolid: 2,
      avatar: "defaultUser.png",
      document: document,
      nationality: nationality?.trim(),
      birthday: birthday,
    });
    return res.redirect("/users/login");
  },
  login: (req, res) => {
    return res.render("login", {
      title: "Login",
    });
  },
  processLogin: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        ok: false,
        status: 401,
        msg: "El email y password son requeridos",
      });
    }

    const userLogin = await db.User.findOne({ where: { email, password } });

    if (req.body.remember) {
      res.cookie("ceramicas10", req.session.userLogin, {
        maxAge: 1000 * 60,
      });
    }
    if (!userLogin) {
      return res.status(401).json({
        ok: false,
        status: 401,
        msg: "Credenciales invalidas",
      });
    }
    return res.redirect("/users/profile");
  },
  logout: async (req, res) => {
    try {
      const userId = req.params.id;
      const logoutUser = await db.User.destroy({
        where: { id: userId },
        force: true,
      });

      if (!logoutUser) {
        return res.status(404).json({
          ok: false,
          status: 404,
          msg: "Es probable que el usuario no existe",
        });
      }

      return res.status(200).json({
        ok: true,
        status: 200,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        status: 500,
        msg: error.message || "Server error",
      });
    }
    return res.redirect("/");
  },
  profile: (req, res) => {
    let user = db.User.findOne({ where: user.id === req.session.userLogin.id });
    return res.render("profile", {
      title: "Profile",
      user,
    });
  },
  update: async (req, res) => {
    const { id } = req.params.id;
    const { firstname, lastname, avatar, document, nationality, birthday } =
      req.body;
    try {
      const options = {
        include: [
          {
            attributes: {
              exclude: ["userId", "deletedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["deletedAt", "password"],
        },
      };
      const user = await db.User.findByPk(id, options);

      user.firstname = firstname?.trim() || user.firstname;
      user.lastname = lastname?.trim() || user.lastname;
      user.avatar = req.file?.filename || user.avatar;
      user.document = document?.trim() || user.document;
      user.nationality = nationality?.trim() || user.nationality;
      user.birthday = birthday?.trim() || user.birthday;

      await user.save();

      return res.status(200).json({
        ok: true,
        status: 200,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        status: 500,
        msg: error.message || "Ocurrió un error",
      });
    }
  },
};
