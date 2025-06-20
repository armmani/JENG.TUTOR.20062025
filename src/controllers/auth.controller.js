const authController = {}

authController.register = async (req, resizeBy, next) => {
  try {
    const { email, password} = req.body // เอามาจากใน model
  } catch (error) {
    next(error)
  }
}

export default authController