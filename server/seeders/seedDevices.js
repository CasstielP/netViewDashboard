const Device = require('../models/Device')

const seedDevices = async()=> {
    await Device.destroy({where: {}})
    await Device.bulkCreate([
        {
            name: "Tower-Alpha",
            ip: "10.0.1.1",
            status: "Online",
            uptime: "4d 6h",
            signalStrength: 82,
          },
          {
            name: "Node-Bravo",
            ip: "10.0.2.3",
            status: "Warning",
            uptime: "2d 19h",
            signalStrength: 45,
          },
          {
            name: "Site-Charlie",
            ip: "10.0.3.9",
            status: "Offline",
            uptime: "0h",
            signalStrength: 0,
          },
    ])
}

module.exports = seedDevices