const validateProjectBody = (req, res, next) => {
  const data = req.body;
  if (!data) {
    res.status(400).json({ message: "Please provide valid data" });
  } else if (!data.name) {
    res.status(400).json({ message: "Please provide a name property" });
  } else {
    next();
  }
};

module.exports = validateProjectBody;
