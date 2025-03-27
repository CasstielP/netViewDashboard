const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const {sequelize} = require("./config/database")
const deviceRoutes = require('./routes/deviceRoutes')
const seedDevices = require("./seeders/seedDevices")
const seedConfig = require('./seeders/seedConfig')
const configRoutes = require("./routes/configRoutes")

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/devices', deviceRoutes)
app.use('/api/config', configRoutes)


const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("NetView API is currently running...")
})


sequelize.sync({force: true}).then(async ()=> {
    await seedDevices();
    await seedConfig();
    app.listen(PORT, ()=> {
        console.log(`Server running on http://localhost:${PORT}`)
    })
})