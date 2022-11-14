const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");
const path = require("path");
const db = require("../database/models");

module.exports = {
  register: (req, res) => {
    return res.render("userRegister", {
      title: "Register",
    });
  },
  processRegister: async (req, res) => {
    /* ******************** */
    /* FALTA VALIDAR EN BACKEND!!!!! */
    /* ******************** */

    /* recibo los datos del formulario */
    const {
      firstname,
      lastname,
      email,
      password,
      document,
      nacionality,
      birthday,
    } = req.body;

    /* creo el registro en la base de datos */
    await db.User.create({
      firstname: firstname?.trim(),
      lastname: lastname?.trim(),
      email: email?.trim(),
      password: hashSync(password, 10),
      rolId: 2,
      avatar: "defaultUser.png",
      document: document,
      nacionality: nacionality?.trim(),
      birthday: birthday,
    });

    /* redirecciono al login */
    return res.redirect("/users/login");
  },
  login: (req, res) => {
    return res.render("login", {
      title: "Login",
    });
  },
  processLogin: (req, res) => {
    /* recibo las validaciones del backend */
    let errors = validationResult(req);

    /* recibo los datos del formulario */
    const { email } = req.body;

    if (errors.isEmpty()) {
      /* si no hay errores, busco a la segura el usuario que se está loguenado */
      db.User.findOne({ where: { email } })
        .then(({ id, firstname, lastname, rolId, avatar }) => {
          /* levanto sesión */
          req.session.userLogin = {
            id,
            name: `${firstname} ${lastname}`,
            avatar,
            rolId,
          };

          /* guardo la cookie */
          if (req.body.remember) {
            res.cookie("ceramicas10", req.session.userLogin, {
              maxAge: 1000 * 60,
            });
          }

          /* redirecciono al profile */
          return res.redirect("/users/profile");
        })
        .catch((error) => console.log(error));
    } else {
      /* si hay errores, los devuelvo a la vista de login */

      return res.render("login", {
        title: "Login",
        errors: errors.mapped(),
      });
    }
  },
  profile: (req, res) => {
    /* busco el usuario con el ID que está en session */
    db.User.findByPk(req.session.userLogin.id)
      .then((user) => {
        return res.render("profile", {
          title: "Profile",
          user,
        });
      })
      .catch((error) => console.log(error));
  },
  update: async (req, res) => {
    /* ******************** */
    /* FALTA VALIDAR EN BACKEND!!!!! */
    /* ******************** */

    /* recibo los datos del formulario */
    const { firstname, lastname, document, nacionality, gender, birthday } =
      req.body;

    /* actualizo el registro en la base de datos */
    db.User.update(
      {
        firstname: firstname?.trim(),
        lastname: lastname?.trim(),
        avatar: req.file ? req.file.filename : req.session.userLogin.avatar,
        document: document,
        nacionality: nacionality?.trim(),
        birthday: birthday ? birthday : null,
        gender: gender?.trim(),
      },
      {
        where: {
          id: req.session.userLogin.id,
        },
      }
    ).then( async() => {
      /* busco al usuario y actualizo los datos en session */

      let {firstname, lastname, avatar} = await db.User.findByPk(req.session.userLogin.id)

      req.session.userLogin = {
        ...req.session.userLogin,
        name: `${firstname} ${lastname}`,
        avatar : req.file,
      };

      /* redireciono al profile */

      return res.redirect('/users/profile')
    }).catch(error => console.log(error))
  },
  logout: (req, res) => {
      
      req.session.destroy()

      if(req.cookies.ceramicas10){
        res.cookie("ceramicas10", null, {
          maxAge: -1,
        });
      }

    return res.redirect("/");
  },
};
