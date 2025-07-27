const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const { type } = require("os");
const PORT = 4000;

mongoose
  .connect("mongodb://127.0.0.1:27017/dummy_data")
  .then(() => console.log("MongDb database connected"))
  .catch((err) => console.log("mongo Error", err));

// Schema

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    job_title: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

// const filePath = path.join(__dirname, "./MOCK_DATA.json");
// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// custom middleware
app.use((req, res, next) => {
  console.log("Hello form middleware 1");

  fs.appendFile(
    "./log.txt",
    `\n${Date.now()}: ${req.method} : ${req.path}`,
    (err) => {
      if (err) {
        console.log("Error");
      }
      next();
    }
  );
});

app.use((req, res, next) => {
  console.log("Hello form middleware 2");
  console.log(req.headers);
  // Always add X to custom headers
  res.setHeader("X-Name", "Navneet Singh");
  //   return res.end("End");
  next();
});
// routes

app.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  // fs.readFile(filePath, "utf-8", (err, data) => {
  //   if (err) {
  //     return res.json("Failed to read the Data");
  //   }
  //   const users = JSON.parse(data);
    // const html = `
    //   <ul>
    //     ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    //   </ul>
    // `;
    const html = `
      <ul>
        ${allUsers.map((user) => `<li>${user.first_name} - ${user.email}</li>`).join("")}
      </ul>
    `;
    res.send(html);
  // });
});

// GET all Users

app.get("/api/users", async (req, res) => {
  // fs.readFile(filePath, "utf-8", (err, data) => {
  //   if (err) {
  //     return res.json({ status: "error", message: "Failed to read the data" });
  //   }

  //   const users = JSON.parse(data);
  //   return res.json(users);
  // });
  const allUsers = await User.find({});
    return res.json(allUsers)
});

// Post new User

app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log("Body: ", body);
  if (!body || !body.first_name || !body.last_name || !body.email) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  // fs.readFile(filePath, "utf-8", (err, data) => {
  //   if (err) {
  //     return res.json("Failed to read the Data");
  //   }
  //   const users = JSON.parse(data);
  //   const newUser = { ...body, id: users.length + 1 };
  //   users.push(newUser);

  //   fs.writeFile(filePath, JSON.stringify(users), (err) => {
  //     if (err) {
  //       console.log("Error");
  //       return res.status(500).json({ status: "Failed to save data" });
  //     } else {
  //       return res
  //         .status(201)
  //         .json({ status: "Data Added Successfully", user: newUser });
  //     }
  //   });
  // });
  const result = User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  console.log("Result" , result)
  return res.status(201).json({ msg: "Success" });
});

// GET, PATCH, DELETE by ID

app
  .route("/api/users/:id")
  .get( async (req, res) => {
    // const id = Number(req.params.id);
    // fs.readFile(filePath, "utf-8", (err, data) => {
    //   if (err) {
    //     return res.json({ status: "Failed to get data" });
    //   }
    //   const users = JSON.parse(data);
    //   const user = users.find((user) => user.id === id);
    //   if (!user) return res.status(404).json({ error: "User Not Found" });
    //   return res.json(user);
    // });
    const user = await User.findById(req.params.id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const reqData = req.body;
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return res.json({ status: "Failed to get data" });
      }
      let users = JSON.parse(data);
      const index = users.findIndex((user) => user.id === id);

      users[index] = { ...users[index], ...reqData };

      fs.writeFile(filePath, JSON.stringify(users), (err) => {
        if (err) {
          return res.json({ status: "Failed to write the data" });
        }
        return res.json({
          status: "User updated successfully",
          user: users[index],
        });
      });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return res.json({ status: "Failed to get data" });
      }
      let users = JSON.parse(data);
      const index = users.findIndex((user) => user.id === id);

      if (index === -1) {
        return res.status(404).json({ status: "User not found" });
      }

      users.splice(index, 1);

      fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          return res.json({ status: "Failed to write file" });
        }

        return res.json({ status: "User deleted successfully" });
      });
    });
  });
app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});

// middleware is a function that has access to the request object (req), response object (res), and the next middleware function in the application’s request-response cycle. It can perform operations on the request and response objects, end the request-response cycle, or call the next middleware function in the stack.
// Middleware functions can perform a wide range of tasks, such as logging requests, parsing request bodies (e.g., JSON or URL-encoded data), handling authentication, and more. They are executed in the order they are defined in the application, allowing for a modular and organized approach to handling requests and responses.
// In this code, we are using the express.json() middleware to parse incoming JSON request bodies and express.urlencoded() middleware to parse URL-encoded data. This allows us to easily access the data sent in the request body when handling POST and PATCH requests.
// The app.use() method is used to register middleware functions in the Express application. In this case, we are registering both middleware functions to handle incoming requests that contain JSON or URL-encoded data. This ensures that the request body is parsed and available in the req.body object for subsequent route handlers to use.
