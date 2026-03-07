import express from "express";
import { prisma } from "@repo/db";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there")
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const user = await prisma.user.create({
        data : {
            username,
            password
        }
    })

    res.json({
        message: "Signup Succesfull",
        id: user.id
    })
})

app.listen(3001, () => {
    console.log("Server is listening on Port 3000");
})