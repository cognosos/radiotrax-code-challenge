var createError = require("http-errors");
var express = require("express");
var cors = require("cors")
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var authRouter = require("./routes/auth");
var devicesRouter = require("./routes/devices");
const auth = require("./auth");

var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug")
var ENV = app.get("env");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

if (ENV === "development") {
  app.use(cors({origin: 'http://localhost:8080', credentials: true}));
  app.options('*', cors())
}

app.use(auth);
app.use("/auth", authRouter);
app.use("/devices", devicesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = ENV === "development" ? err : {};
  console.log(err)

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
