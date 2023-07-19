const { Category } = require("../model/Category");
const { User } = require("../model/User");

exports.fetchUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id, "name email id").exec();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    // we want new document to be returned
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
