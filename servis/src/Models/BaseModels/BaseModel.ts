import mongoose, { Document } from "mongoose"

export class BaseModel_Test {
    OlusturmaTarihi?: Date
    SilindiMi?: boolean
    GuncellemeTarihi?: Date
    _id: mongoose.Types.ObjectId
}

export class BaseModel extends Document {
    OlusturmaTarihi?: Date
    SilindiMi?: boolean
    GuncellemeTarihi?: Date
}

export const BaseSchema = {
    OlusturmaTarihi: {
        type: Date,
        default: Date.now()
    }
}