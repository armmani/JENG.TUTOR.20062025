import prisma from "../config/prisma.js";

const authService = {};

authService.findUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email: email },
  });
};

authService.createUser = (data) => {
  return prisma.user.create({data: data})
};

export default authService;
