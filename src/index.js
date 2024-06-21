import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config/config.js";
import { authRouter } from "./api/routes/auth-routes.js";
import { pameranRouter } from "./api/routes/pameran-routes.js";
import { penyelenggaraRouter } from "./api/routes/penyelenggara-routes.js";

const app = express();

// express use()
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

// Router
app.use('/api/v1', authRouter);
app.use('/api/v1', pameranRouter);
app.use('/api/v1', penyelenggaraRouter);

const APP_PORT = config.APP_PORT || 3000;

app.listen(APP_PORT, () => {
   console.log(`Server is running on port ${APP_PORT}`);
});

export default app;