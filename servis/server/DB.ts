import { connect } from "mongoose"

export const DBOturumAc = async () => {
    await connect("mongodb+srv://ertugrul:1234@cluster0.ba1gi.mongodb.net/udemy-movie-app?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("MongoDB bağlantısı başarılı")
        }
    })
}