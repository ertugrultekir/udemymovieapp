import { KategoriCollection, KategoriModel } from "../../Models/Kategori/KategoriModel"
import IDonusTipi from "../../Models/BaseModels/IDonusTipi"

export const KategoriEkle = async (data: KategoriModel) => {
    try {
        const km = new KategoriCollection({
            ...data
        })

        await km.save()
        const sonuc: IDonusTipi = {
            BasariliMi: true,
            Mesaj: "Kayıt işlemi başarı ile tamamlandı.",
            Data: []
        }

        return sonuc
    } catch (error) {
        const sonuc: IDonusTipi = {
            BasariliMi: false,
            Mesaj: error.message,
            Data: []
        }
        return sonuc
    }
}

export const KategorileriGetir = async () => {
    try {
        const sonuc = await KategoriCollection.find({})

        const donus: IDonusTipi = {
            BasariliMi: true,
            Mesaj: "",
            Data: sonuc
        }
        if (!sonuc) {
            donus.Data = []
        }

        return donus
    } catch (error) {
        const sonuc: IDonusTipi = {
            BasariliMi: false,
            Mesaj: error.message,
            Data: []
        }
        return sonuc
    }
}

export const TekKategoriGetir = async (data: KategoriModel) => {
    try {
        const sonuc = await KategoriCollection.findById(data._id)

        const donus: IDonusTipi = {
            BasariliMi: true,
            Mesaj: "",
            Data: sonuc
        }
        if (!sonuc) {
            donus.Data = {}
        }

        return donus
    } catch (error) {
        const sonuc: IDonusTipi = {
            BasariliMi: false,
            Mesaj: error.message,
            Data: []
        }
        return sonuc
    }
}