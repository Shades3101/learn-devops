import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (ws) => {
    const user = await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        }
    })
    ws.send("Hi there, You are connected to the ws server")
    console.log(user)
})