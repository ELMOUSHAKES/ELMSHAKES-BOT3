
const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8964173950:AAGDb3zQY5cRFa87sucbHCyb3mQpmuloe1A" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "- 𝑰𝑻𝑺 »ELMSHAKES CRASH BOT»࿅ 𓈪" //your bot name
global.OWNER_NAME = "https://t.me/crushbot89" //your name with sign @
global.OWNER = ["https://t.me/crushbot89", "https://t.me/crushbot89"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["5593987807"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://files.catbox.moe/ztcirt.png' //your bot pp


//approval
global.GROUP_ID = -1003379098410; // Replace with your group ID
global.CHANNEL_ID =  -8964173950; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/ELGHAHDEN_NUMBERS"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/crushbot89"; // Replace with your private channel invite link
global.WHATSAPP_LINK = ""; // Replace with your group link
global.YOUTUBE_LINK = ""; // Replace with your youtube link
global.INSTAGRAM_LINK = ""; // Replace with your ig link

global.owner = global.owner = ['+201514142074'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})