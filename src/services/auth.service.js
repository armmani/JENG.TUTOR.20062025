import prisma from "../config/prisma.js";

const authService = {};

authService.findUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email: email },
  });
};

export default authService;
