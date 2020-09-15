import { Router } from "express";

export const YonetmenRouter = Router();

YonetmenRouter.post("/yonetmenleriListele", (req, res) => {
    res.send("Yönetmenler Listesi")
})