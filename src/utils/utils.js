import { initializeApp } from "firebase-admin/app";

const app = initializeApp();

const admin = require("firebase-admin");

const serviceAccount = require(".env");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
