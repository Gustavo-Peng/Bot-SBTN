import axios from "axios"

let handler = async (m, { args }) => {
  if (!args[0]) throw "Escribe el nombre de donde quieras para ver su tiempo"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `「 📍 」 Provincia: ${name}\n「 🗺️ 」 Pais: ${Country}\n「 🌤️ 」 Tiempo: ${Weather}\n「 🌡️ 」Temperatura: ${Temperature}\n「 💠 」 Temperatura minima: ${Minimum_Temperature}\n「 📛 」 Temperatura maxima: ${Maximum_Temperature}\n「 💦 」 Humedad: ${Humidity}\n「 🌬️ 」   Viento: ${Wind}
  `

    m.reply(wea)
  } catch (e) {
    return "Error localidad no encontrada!!!"
  }
}

handler.help = ['weather']
handler.tags = ['tools']

handler.command = /^(tiempo|weather)$/i

export default handler
