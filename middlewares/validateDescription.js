const validateDescription = (req, res, next) => {
  const data = req.body;
  if (!data) {
    res.status(400).json({ message: "Please send valid body data" });
  } else if (!data.description) {
    res.status(400).json({ message: "Please send a description property" });
  } else {
    next();
  }
};

module.exports = validateDescription;
