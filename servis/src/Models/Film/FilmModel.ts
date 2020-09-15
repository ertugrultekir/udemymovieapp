import mongoose, { Schema, model } from "mongoose";
import { BaseModel, BaseSchema, BaseModel_Test } from "../BaseModels/BaseModel";
import { KategoriModel } from "../Kategori/KategoriModel";


interface IFilmModel {
    Ad: string
    Kategori: KategoriModel
    KategoriID: mongoose.Types.ObjectId
}

export class FilmModel_Test extends BaseModel_Test implements IFilmModel {
    Ad: string;
    Kategori: KategoriModel;
    KategoriID: mongoose.Types.ObjectId;

}

export class FilmModel extends BaseModel implements IFilmModel {
    Ad: string;
    Kategori: KategoriModel;
    KategoriID: mongoose.Types.ObjectId;
}

const FilmSchema = new Schema({
    Ad: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true
    },
    KategoriID: mongoose.Types.ObjectId,
    ...BaseSchema
}, { collation: { locale: "tr" } })

export const FilmCollection = model<FilmModel>("Film", FilmSchema, "Filmler")