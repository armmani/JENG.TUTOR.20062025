import authService from "../services/auth.service.js"

const authController = {}

authController.register = async (req, resizeBy, next) => {
  try {
    const { email, password} = req.body // เอามาจากใน model

    await authService.findUserByEmail(email)
  } catch (error) {
    next(error)
  }
}

export default authController