import prisma from "../config/prisma.js";

const authService = {};

authService.findUserByEmail = (email) => {
  return prisma.user.findUnique({
    where: { email: email },
  });
};

authService.findUserById = (id) => {
  return prisma.user.findUnique({
    where: { id: id },
    select: { id: true, email: true, role: true },
  });
};

authService.createUser = (data) => {
  return prisma.user.create({ data: data });
};

export default authService;
