import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from './routes/user.routes.js'
//app
const app = express();
const port = 3001;

//db connection
import connectDB from "./config/db.js";
connectDB();

//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
