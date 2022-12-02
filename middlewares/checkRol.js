

const checkRol = (req, res, next) => {
  const { rolId } = req.userToken;

  if (rolId !== 1) {
    return res.status(403).json({
        ok: false,
        error : "No tienes permisos para esta accion"
    })
  }

  next();
};

module.exports = { checkRol };