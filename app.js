const User = require("./user"); //user.js connect
const passport = require("passport");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

var express = require("express");
var app = express();

//database
const mongod = new MongoMemoryServer();
mongod
  .getUri()
  .then((uri) => {
    const mongooseOpts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    mongoose.connect(uri, mongooseOpts);
  })
  .catch((err) => {
    console.err(err);
  });

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
        "e5ce9ce6c45e0312d204f99eb9c2cefd82a394bf654fa5188a54057b24c7f572",
      clientSecret:
        "2bf68eb676ed56eb8559806f4b2424b91e2e869d0503eab1814c8769e2ccf7b2",
      callbackURL: "http://localhost:3000/auth/42/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      User.findOne({ id: profile.id }, (err, user) => {
        if (user) {
          return done(err, user);
        } // 회원 정보가 있으면 로그인
        const newUser = new User({
          // 없으면 회원 생성
          id: profile.id,
        });
        newUser.save((err, user) => {
          if (err) return cb(err, null);
          return cb(null, user); // 새로운 회원 생성 후 로그인
        });
      });
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
    res.redirect("/");
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
