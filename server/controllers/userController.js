const userModel = require("../model/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const body = req.body;

  console.log(tokenUserId, id);
  console.log(body);

  if (id !== tokenUserId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }


  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      {
        bio: body.bio,
        email: body.email,
        profilePicture: body.profilePicture,
        userName: body.userName,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      bio: body.bio,
      email: body.email,
      profilePicture: body.profilePicture,
      userId: body.userId,
      userName: body.userName,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.addLoved = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;

  console.log(tokenUserId, id);

  try {
    const user = await userModel.findById(tokenUserId);

    let message = "";

    if (!user.lovedHotels.includes(id)) {
      user.lovedHotels.push(id);
      message = "Hotel added to loved hotels";
    } else {
      user.lovedHotels.pull(id);
      message = "Hotel removed from loved hotels";
    }
    await user.save();
    res.status(200).json({ message });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
