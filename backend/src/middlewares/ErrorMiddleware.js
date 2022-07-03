const errorMiddleware = (err, _req, res, _next) => {
  if (err.errorCode) return res.status(err.errorCode).json({ message: err.message });
  console.log(err);
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddleware;
