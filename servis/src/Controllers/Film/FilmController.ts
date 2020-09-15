import { FilmCollection, FilmModel } from "../../Models/Film/FilmModel";
import IDonusTipi from "../../Models/BaseModels/IDonusTipi";
import monogoose from "mongoose"
import { KategoriCollection } from "../../Models/Kategori/KategoriModel";

export const FilmEkle = async (data: FilmModel) => {
    const session = await monogoose.startSession();
    try {
        session.startTransaction()

        const kf = await KategoriCollection.findOne({ Ad: data.Kategori.Ad }).session(session)

        if (kf) {
            data.KategoriID = kf._id
        }
        else {
            const kc = await KategoriCollection.create([{ Ad: data.Kategori.Ad }], { session: session })
            data.KategoriID = kc[0]._id
        }

        await FilmCollection.create([{ ...data }], { session: session })

        const donus: IDonusTipi = {
            BasariliMi: true,
            Data: [],
            Mesaj: "Kayıt işlemi başarı ile tamamlandı."
        }
        session.commitTransaction()
        return donus
    } catch (error) {
        const donus: IDonusTipi = {
            BasariliMi: false,
            Data: [],
            Mesaj: error.message
        }
        session.abortTransaction()
        return donus
    }
}

export const FilmleriGetir = async () => {
    try {
        const sonuc = await FilmCollection.aggregate([
            {
                $lookup: {
                    from: "Kategoriler",
                    localField: "KategoriID",
                    foreignField: "_id",
                    as: "Kategori"
                }
            }
        ])
        // console.log(await FilmCollection.find({ Ad: "HEKİMOĞLU" }, { Ad: 1 }))

        const donus: IDonusTipi = {
            BasariliMi: true,
            Data: sonuc,
            Mesaj: ""
        }
        return donus
    } catch (error) {
        const donus: IDonusTipi = {
            BasariliMi: false,
            Data: [],
            Mesaj: error.message
        }
        return donus
    }
}

export const FilmGuncelle = async (data: FilmModel) => {
    const session = await monogoose.startSession();
    try {
        session.startTransaction()
        
        const sonuc = await FilmCollection.findByIdAndUpdate(data._id, { ...data }, { new: true }).session(session)

        const donus: IDonusTipi = {
            BasariliMi: true,
            Data: sonuc,
            Mesaj: "Güncelleme işlemi başarı ile tamamlandı."
        }
        session.commitTransaction()
        return donus
    } catch (error) {
        const donus: IDonusTipi = {
            BasariliMi: false,
            Data: {},
            Mesaj: error.message
        }
        session.abortTransaction()
        return donus
    }
}