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
  } catch (error) {
    next(error);
  }
};

// คนที่ login ถึงจะ getMe ได้
