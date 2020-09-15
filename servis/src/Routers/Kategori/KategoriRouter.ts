import { Router } from "express";
import { KategoriEkle, KategorileriGetir, TekKategoriGetir } from "../../Controllers/Kategori/KategoriController";

export const KategoriRouter = Router();

KategoriRouter.post("/kategoriEkle", async (req, res) => {
    const sonuc = await KategoriEkle(req.body);
    res.json(sonuc)
})

KategoriRouter.post("/kategorileriGetir", async (req, res) => {
    const sonuc = await KategorileriGetir()
    res.json(sonuc)
})

KategoriRouter.post("/kategoriGetir", async (req, res) => {
    const sonuc = await TekKategoriGetir(req.body)
    res.json(sonuc)
})