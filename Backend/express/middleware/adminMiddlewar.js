function adminMiddleware(req, res, next) {
  req.token = "admin";
  if (req.token === "admin") {
    next(); // Call next() to proceed to the route handler
  } else {
    return res.status(404).setHeader("Set-Cookie", "email=abc@gmail.com; path=/; HttpOnly")
    .redirect("./public/404.html");
  }
}
module.exports = adminMiddleware;
