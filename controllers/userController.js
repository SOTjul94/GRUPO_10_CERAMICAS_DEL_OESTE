const { validationResult } = require("express-validator");
const { loadUsers, storeUsers } = require("../data/db");
const bcryptjs = require("bcryptjs");

module.exports = {
  login: (req, res) => {
    return res.render("login", {
      title: "Login",
    });
  },
  processLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let { id, name, username, rol, avatar } = loadUsers().find(
        (user) => user.email === req.body.email
      );
      req.session.userLogin = {
        id,
        username,
        name,
        rol,
        avatar,
      };
      if (req.body.remember) {
        res.cookie("ceramicas10", req.session.userLogin, {
          maxAge: 1000 * 60,
        });
      }
      return res.redirect("/users/profile");
    } else {
      return res.render("login", {
        title: "Login",
        errors: errors.mapped(),
      });
    }
  },
  register: (req, res) => {
    return res.render("register", {
      title: "Register",
    });
  },
  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      const { firstname, lastname, email, password } = req.body;
      let users = loadUsers();

      let newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        firstname: firstname?.trim(),
        lastname: lastname?.trim(),
        email: email?.trim(),
        password: bcryptjs.hashSync(password, 12),
        rol: "user",
        avatar: "https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook_Q640.jpg",
        gender: null,
        document: null,
        nationality: null,
        birthday: null,
      };
      let usersModify = [...users, newUser];
      storeUsers(usersModify);

      return res.redirect("/users/login");
    } else {
      return res.render("register", {
        title: "Register",
        errors: errors.mapped(),
        old: req.body,
      });
    }
  
  /*logout: (req, res) => {
    res.session.destroy();
    return res.redirect("/");
  },*/
  
},
logout : (req,res) => {
    req.session.destroy();
    res.cookie("CERAMICAS_DEL_OESTE",null,{maxAge: -1});
    return res.redirect("/")
},
profile : (req, res) => {
    let user = loadUsers().find((user) => user.id === req.session.userLogin.id);
    return res.render("profile", {
      title: "Profile",
      user
    });
 },
update : (req, res) => {
    /* OBTENEMOS LOS USUARIOS */
    const users = loadUsers();
    const avatar = req.file;
    const { userLogin } = req.session;
    /* DESTRUCTURACION DEL BODY */
    const { firstname, lastname, nationality, document, gender, birthday } =
      req.body;

    /* MAPEAMOS LOS USUARIOS */
    const usersModify = users.map((user) => {
      /* SI EL ID DEL USUARIO QUE SE RECORRE ES IGUAL AL PARAMETRO QUE MANDAMOS POR LA URL */
      if (user.id === userLogin.id) {
        /* RETORORNAMOS EL USUARIO QUE COINCIDE Y LE ACTUALIZAMOS LOS DATOS A PARTIR DE LO QUE NOS VIENE POR EL BODY */
        return {
          ...user,
          firstname: firstname?.trim(),
          lastname: lastname?.trim(),
          nationality: nationality?.trim(),
          document: document?.trim(),
          gender: gender?.trim(),
          birthday,
          avatar: avatar ? avatar.filename : user.avatar,
        };
      }
      return user;
    });
    storeUsers(usersModify);
    res.redirect("/users/profile");
}

}
