import authService from "../services/auth.service.js";
import createError from "../utils/create-error.js";

const authController = {};

authController.register = async (req, resizeBy, next) => {
  try {
    const { email, password } = req.body; // เอามาจากใน model

    const existUser = await authService.findUserByEmail(email);
    console.log("existUser", existUser);
    if (existUser) {
      createError(400, "EMAIL IS ALREADY EXISTED");
    }
  } catch (error) {
    next(error);
  }
};

export default authController;
