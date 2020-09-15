import chai = require("chai")
const expect: Chai.ExpectStatic = require("chai").expect
const should = chai.should()
import chaiHttp = require('chai-http')
import { app } from "../../server/server"
import { request } from "chai"
import { FilmModel_Test } from "../../src/Models/Film/FilmModel"
import mongoose from "mongoose"

chai.use(chaiHttp)

describe("TÜM FİLM API CALL METODLARININ TEST EDİLDİĞİ BÖLÜM.", function () {
    describe("/film/filmleriGetir testi", function () {
        this.timeout(10000);
        it("", async () => {
            const res = await request(app).post("/film/filmleriGetir")

            res.should.have.status(200)
            expect(res.body).to.be.a("object")
            expect(res.body).to.have.property("Data")
            expect(res.body.Data).to.be.a("array")
            expect(res.body.Data[0]).to.have.property("KategoriID")
        })
    })

    describe('/film/filmGuncelle testi', function () {
        this.timeout(10000);
        it("", async () => {
            const eklenecekData = new FilmModel_Test()
            eklenecekData.Ad = "Mentalist"
            eklenecekData._id = mongoose.Types.ObjectId("5f4959b3889dd14a84bde12a")
            eklenecekData.KategoriID = mongoose.Types.ObjectId("5f495969a710c246e4bc643f")

            const res = await request(app).post("/film/filmGuncelle").send(eklenecekData)

            res.should.have.status(200)
            expect(res.body).to.be.a("object")
            expect(res.body.Data).to.be.a("object")
            expect(res.body.BasariliMi).to.eql(true)

            expect(res.body.Data).to.have.property("Ad").eql(eklenecekData.Ad)
            expect(res.body.Data).to.have.property("_id").eql(eklenecekData._id.toHexString())
            expect(res.body.Data).to.have.property("KategoriID").eql(eklenecekData.KategoriID.toHexString())
        })
    })

})