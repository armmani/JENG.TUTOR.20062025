import authService from "../services/auth.service.js";
import jwtService from "../services/jwt.service.js";
import createError from "../utils/create-error.js";

const authenticate = async (req, res, nex) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer")) {
      createError(401, "Unauthorized");
    }

    const token = authorization.split(" ")[1];
    console.log("token", token);

    if (!token) {
      createError(401, "Unauthorized Token");
    }

    const payload = jwtService.verifyToken(token);
    console.log("payload", payload);

    const user = await authService.findUserById({ id: payload.id });
    if (!user) {
      createError(401, "Unauthorized by ID");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

// คนที่ login ถึงจะ getMe ได้
