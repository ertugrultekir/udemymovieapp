import { BaseSchema, BaseModel } from './../BaseModels/BaseModel';
import { Document, Schema, model } from "mongoose";



export class KategoriModel extends BaseModel {
    Ad: string
}

const KategoriSchema = new Schema({
    Ad: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    ...BaseSchema
}, { collation: { locale: "tr" } })

export const KategoriCollection = model<KategoriModel>("Kategori", KategoriSchema, "Kategoriler")