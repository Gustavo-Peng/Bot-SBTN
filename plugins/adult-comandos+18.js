import axios from "axios"
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*'   
if (command == 'nsfwloli') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/wallpaper/nsfwloli?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'nsfwfoot') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/foot?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'nsfwass') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/ass?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'nsfwbdsm') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/gifs?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'nsfwgifs') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/bdsm?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'nsfwcum') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/cum?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}    
if (command == 'nsfwero') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/ero?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'nsfwfemdom') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/femdom?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}     
if (command == 'nsfwglass') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/foot?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}    
if (command == 'hentai') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/hentai?APIKEY=29d4b59a4aa687ca`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'nsfworgy') {
let haha = await conn.getFile(`https://api-reysekha.herokuapp.com/api/nsfw/orgy?apikey=APIKEY`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'tetas') {
let res = await axios("https://meme-api.herokuapp.com/gimme/boobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'booty') {
let res = await axios("https://meme-api.herokuapp.com/gimme/booty")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'ecchi') {
let res = await axios("https://meme-api.herokuapp.com/gimme/ecchi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)} 
if (command == 'furro') {
let res = await axios("https://meme-api.herokuapp.com/gimme/Furryporn")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)} 
if (command == 'trapito') {
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)} 
if (command == 'imagenlesbianas') {
let res = await axios("https://meme-api.herokuapp.com/gimme/lesbians")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}     
if (command == 'panties') {
let res = await axios("https://meme-api.herokuapp.com/gimme/panties")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'pene') {
let res = await axios("https://meme-api.herokuapp.com/gimme/penis")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'porno') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'porno2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/porngif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'randomxxx') {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'pechos') {
let res = await axios("https://meme-api.herokuapp.com/gimme/sideboobs")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'yaoi') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'yaoi2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yaoi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'yuri') {
let res = await axios("https://api-reysekha.herokuapp.com/api/nsfw/yuri?apikey=APIKEY")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
if (command == 'yuri2') {
let res = await axios("https://meme-api.herokuapp.com/gimme/yurigif")
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['SIGUIENTE', `/${command}`]], m)}
}  
handler.help = ['nsfwloli', 'nsfwgifs', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'porno2', 'randomxxx', 'pechos']
handler.command = ['nsfwloli', 'nsfwgifs', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'porno2', 'randomxxx', 'pechos']
handler.tags = ['nsfw']
export default  handler
