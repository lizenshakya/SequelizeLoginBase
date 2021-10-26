const {
  comparePassword,
  hashedPassword,
} = require("../../helpers/utils/bcrypt.helper");
const db = require("../../../models");
const jwt = require("jsonwebtoken");
const { signin, signup } = require('../auth.validation');
const { sequelize } = require("../../../models");

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //const result = await signin.validateAsync(req.body, { abortEarly: false });
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
  }
};

exports.signup = async (req, res, next) => {
  const { name, email, role, password, country, address1, address2, city, state, zone, provision, longitude, latitude } = req.body;
  const t = await sequelize.transaction();
  try {
    //await signup.validateAsync(req.body, { abortEarly: false });
    const oldUser = await db.User.findOne({ where: { email } });
    if (oldUser)
      return res.status(400).json({ message: "User already exists" });
    const hashPassword = await hashedPassword(password);
    const result = await db.User.create({
      email,
      password: hashPassword,
      name,
    }, { transaction: t});
    console.log(result, ">>>>>>>>>>>>>>>>>>>>>>")
    const { id } = result.dataValues;
    const userAddress= await db.UserAddress.create({
      country,
      address1,
      address2,
      city,
      state,
      zone,
      provision,
      longitude,
      latitude,
      userId: id
    }, { transaction: t})
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
    await t.commit();
    res.status(201).json({ result, token });
  } catch (error) {
    await t.rollback();
    return next(error)
  }
};

exports.getUserInfo = async(req, res, next) => {
  try {
    const { email } = req.query;
    const userInfo = await db.User.findOne({
      include: [{ model: db.UserAddress, as: "userAddress" }],
      where: { email }
    });
    console.log(userInfo, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    res.status(201).json({ userInfo });

  } catch(error) {
    next(error);
  }
}