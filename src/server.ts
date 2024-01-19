// server.ts

import express from "express";
import authController from "./controllers/auth.controller";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.post("/register", authController.signUp);
app.post("/login", authController.signIn);
app.post("/logout", authController.signOut);

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
