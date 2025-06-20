const notFoundMiddleware =(req, res) => {
  res.status(404).json({ message: `Not Found path: ${req.method} ${req.url}` });
}

export default notFoundMiddleware