import express from "express";
import cors from "cors";
const app = express();
const PORT = 3001;

import user from "./src/routes/users.route.js";
import product from "./src/routes/product.route.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", user);
app.use("/product", product);

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
