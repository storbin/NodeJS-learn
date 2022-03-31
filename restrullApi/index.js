import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 8000;
const DB_URL = 'mongodb+srv://admin:mYd8KwXTUOaUQWVg@cluster0.eda6l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log("SERVER STarted"));
    } catch (e) {
        console.log(e);
    }
}

startApp()
