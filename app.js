// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');

// const app = express();
// const PORT = process.env.PORT || 3001;
// const secretKey = 'your_secret_key'; // Thay thế bằng secret key thực tế

// app.use(bodyParser.json());

// // Route đăng nhập
// app.post('/login', (req, res) => {
//   // Giả sử ở đây bạn có một cơ sở dữ liệu người dùng
//   const { username, password } = req.body;
//   // Kiểm tra thông tin đăng nhập
//   if (username === 'admin' && password === 'admin') {
//     // Tạo JWT token
//     const token = jwt.sign({ username }, secretKey);
//     res.json({ token });
//     console.log("Created token Successfully  !!!!!")
//   } else {
//     res.status(401).json({ message: 'Invalid username or password' });
//   }
// });

// // Bảo vệ một route bằng JWT middleware
// app.get('/protected', verifyToken, (req, res) => {
//   res.json({ message: 'Protected route accessed successfully' });
// });

// // Middleware xác thực JWT
// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers['authorization'];
//   if (typeof bearerHeader !== 'undefined') {
//     const bearerToken = bearerHeader.split(' ')[1];
//     jwt.verify(bearerToken, secretKey, (err, authData) => {
//       if (err) {
//         res.sendStatus(403);
//       } else {
//         req.authData = authData;
//         next();
//       }
//     });
//   } else {
//     res.sendStatus(403);
//   }
// }

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

import express from "express";
import * as dotenv from "dotenv";
import { studentRouter, userRouter } from "./routers/index.js";
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json())
app.use("/users", userRouter);
app.use("/students", studentRouter);

app.get("/", (req, res) => {
  res.send("This is res from Server!!!!");
});

app.listen(port || 3000, async () => {
  console.log(`Listening on port ${port}`);
});
