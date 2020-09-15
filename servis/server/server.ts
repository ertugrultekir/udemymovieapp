import express from "express"
import { FilmRouter } from "../src/Routers/Film/FilmRouter";
import { YonetmenRouter } from "../src/Routers/Yonetmen/YonetmenRouter";
import { DBOturumAc } from "./DB";
import { KategoriRouter } from "../src/Routers/Kategori/KategoriRouter";

export const app: express.Application = express();

app.use(express.json())
DBOturumAc()

app.use("/film", FilmRouter)
app.use("/yonetmen", YonetmenRouter)
app.use("/kategori", KategoriRouter)

app.listen(3001, async () => {
    console.log("sunucu açıldı")
})

// module.exports = app
// module.exports = Dinle