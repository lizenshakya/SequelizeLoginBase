const {
  comparePassword,
  hashedPassword,
} = require("../../helpers/utils/bcrypt.helper");
const db = require("../../../models");
const jwt = require("jsonwebtoken");
const { signin, signup } = require('../auth.validation');

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await signin.validateAsync(req.body, { abortEarly: false });
    const oldUser = await db.User.findOne({ where: { email } });
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });
    const isPasswordCorrect = await comparePassword(password, oldUser.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      {
        email: oldUser.email,
        id: oldUser.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE_TIME,
      }
    );
    delete oldUser.password;
    res.status(200).json({ oldUser: oldUser, token });
  } catch (err) {
    return next(err)
    // res.status(500).json({ message: "Something went wrong" });
  }
};

exports.signup = async (req, res, next) => {
  const { name, email, role, password } = req.body;
  try {
    await signup.validateAsync(req.body, { abortEarly: false });
    const oldUser = await db.User.findOne({ where: { email } });
    if (oldUser)
      return res.status(400).json({ message: "User already exists" });
    const hashPassword = await hashedPassword(password);
    const result = await db.User.create({
      email,
      password: hashPassword,
      name,
    });
    const token = jwt.sign(
      {
        email: result.email,
        id: result.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE_TIME,
      }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    return next(error)
  }
};
