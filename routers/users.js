import express from "express";
import { body, validationResult } from "express-validator";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET users API");
});
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    
    res.send(`${email} login`)
  }
);
router.post("/register", (req, res) => {
  res.send("PUT update user");
});

export default router;
