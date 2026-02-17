import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {
  findUserByEmail,
  findUserByUsername,
  createNewUser,
  getRegisterUser
} from "../model/authModel.js";

async function registerUser(req, res) {
  let { username, email, password } = req.body;
  console.log(req.body)

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  username = username.trim();
  email = email.trim().toLowerCase();

  if (username.length < 3) {
    return res
      .status(400)
      .json({ error: "Username must be have greater than 3 characters" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    const userExist = await findUserByEmail(email);
    console.log(userExist)
    if (userExist) {
      return res.status(400).json({ error: "Email already eixts" });
    }
    const usernameExists = await findUserByUsername(username);
    console.log(usernameExists)
    if (usernameExists) {
      return res.status(400).json({ error: "username already eixts" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    await createNewUser(username, email, hashPassword);
    console.log(createNewUser)
    res
      .status(201)
      .json({ success: true, message: "Register user successfully." });
  } catch (error) {
    console.error("Registration failed error", error);
    res.status(500).json({
      success: false,
      message: "Registration failed. Please try again",
    });
  }
}


async function loginUserAccount(req, res) {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Invalid email or password" });
  }

  email = email.trim().toLowerCase();

  try {
    const user = await getRegisterUser(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    if (!user.is_active) {
      return res.status(403).json({ error: "Account is disabled" });
    }

    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3 * 60 * 60 * 100,
    });

    res
      .status(200)
      .json({ success: true, message: "Login user successfully." });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login failed. Please try again",
    });
  }
}


export { registerUser, loginUserAccount };
