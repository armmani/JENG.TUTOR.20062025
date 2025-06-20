import jwt from "jsonwebtoken"

const jwtService = {};

jwtService.genAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET)
}

export default jwtService;
