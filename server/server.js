const express = require("express");
const app = express();
const connectDB = require("./config/db");
const router = require("./routes/api");
const csrf = require("csrf");

//middleware import
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const hpp = require("hpp");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

//middleware
app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//csrf middleware


//csrf token

// Connect Database
connectDB();

app.use("/api/v1", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
