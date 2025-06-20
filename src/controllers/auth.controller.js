import authService from "../services/auth.service.js";
import hashService from "../services/hash.service.js";
import jwtService from "../services/jwt.service.js";
import createError from "../utils/create-error.js";

const authController = {};

authController.register = async (req, res, next) => {
  try {
    // 1 find User by email
    const { email, password } = req.body; // เอามาจากใน model

    const existUser = await authService.findUserByEmail(email);
    console.log("existUser", existUser);
    if (existUser) {
      createError(400, "EMAIL IS ALREADY EXISTED");
    }
    // 2 hash Password
    const hashPassword = hashService.hashPassword(password);
    console.log("hashPassword", hashPassword);

    // 3 Create User
    const newUser = await authService.createUser({
      email,
      password: hashPassword,
    });
    console.log("newUser", newUser);

    res.status(201).json({
      success: true,
      newUser: { id: newUser.id, email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    next(error);
  }
};

authController.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1 find User
    const existUser = await authService.findUserByEmail(email);
    console.log("existUser", existUser);

    if (!existUser) {
      createError(400, "Email/Password is invalid");
    }

    const isMatchPassword = hashService.comparePassword(
      password,
      existUser.password
    );
    console.log("isMatchPassword", isMatchPassword);

    const payload = { id: existUser.id };

    const accessToken = jwtService.genAccessToken(payload);
    console.log("accessToken", accessToken);

    res.status(200).json({ success: true, accessToken });
  } catch (error) {
    next(error);
  }
};

authController.getMe = (req, res) => {
  res.status(200).json({ success: true, user: req.user });
};

export default authController;
