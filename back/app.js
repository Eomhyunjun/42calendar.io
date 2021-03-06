const User = require("./user"); //user.js connect
const passport = require("passport");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

var express = require("express");
var app = express();

//session
const session = require("express-session"); // 세션 설정
app.use(
  session({
    secret: "비밀코드",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 10 },
  })
); // 세션 활성화
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결

//oauth passport

var FortyTwoStrategy = require("passport-42").Strategy;

passport.serializeUser((user, done) => {
  // Strategy 성공 시 호출됨
  done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
});

passport.deserializeUser((user, done) => {
  // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
  done(null, user); // 여기의 user가 req.user가 됨
});

passport.use(
  new FortyTwoStrategy(
    {
      clientID:
        "e44ba26db33e0c5a42c18b3876b0c6b2d606be376bf54b4cca30b367854938d6",
      clientSecret:
        "7ae666e15b65ab7d2cd7f95450360b8951824478b310c42b2389b2e20219b4f3",
      callbackURL: "http://42cal.kro.kr:3100/auth/42/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      return cb(null, profile);
    }
  )
);

// routers
app.use("/user", (req, res, next) => {
  res.send(req.user);
});
app.get("/auth/42", passport.authenticate("42"));
app.get(
  "/auth/42/callback",
  passport.authenticate("42", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("175.196.113.248:3100");
  }
);

app.use(express.static("public"));
// app.get("/", function (req, res) {
//   res.send("Hello home page");
// });

app.get("/route", function (req, res) {
  res.send('hello Router, <img src="/img.png">');
});

app.get("/login", function (req, res) {
  res.send("<h1>Login please</h1>");
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.post("/current-user", function (req, res) {
  console.log("# app.js post current-user");
  console.log(req.user);
  res.send(req.user);
});

app.listen(3000, function () {
  console.log("Conneted 3000 port!");
});

// close database

// const closeDatabase = async () => {
//   await mongoose.connection.dropDatabase();
//   await mongoose.connection.close();
//   await mongod.stop();
// };
// closeDatabase();
