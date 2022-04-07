//dotenv-konfiguraatio: Tapa 1:
//require('dotenv').config() //hakee .env-tiedostosta (samasta kansiosta) tiedot process.env:iin

//Tapa 2 (tiedosto eri kansiossa/eri niminen):
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })
//---------------------------------------------
const express = require('express')
const app = express() //alustetaan express-applikaatio

const port = process.env.PORT || 3333
const user = process.env.USER //process.env:iin voi itse määritää haluamiaan stringejä
console.log("process.env.USER="+user)

// app.get('/', homePage)
// function homePage(req, res) {
//     res.send('Hello from express appi!')
// }
//ylläoleva on sama kuin allaoleva(yleisempi tapa kirjoittaa, hyvä tiedostaa!)
app.get('/', (req, res) => {
    res.send('Hello from express app')
})

//portin kuuntelun voi määrittää vain:
//app.listen(port) //tai portin tilalle kovakoodatuna 4000
//tai voi lisätä myös esim.tulostuksen konsoliin:
app.listen(port, () => console.log("Listening on port " + port))