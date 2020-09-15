import express, { Router } from 'express';
import { FilmEkle, FilmleriGetir, FilmGuncelle } from '../../Controllers/Film/FilmController';
export const FilmRouter = Router();

FilmRouter.post("/filmleriGetir", async (req, res) => {
    const sonuc = await FilmleriGetir()
    res.json(sonuc)
    // res.send("test")
})

FilmRouter.post("/filmEkle", async (req, res) => {
    const sonuc = await FilmEkle(req.body)
    res.json(sonuc)
})

FilmRouter.post("/filmGuncelle", async (req, res) => {
    const sonuc = await FilmGuncelle(req.body)
    res.json(sonuc)
})