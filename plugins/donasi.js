const qrku = "https://i.ibb.co/MnbqZ0N/qr-Aguz-Familia-07-06-22-1654614928.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 𝙋𝙪𝙡𝙨𝙖 • 𝙂𝙤𝙥𝙖𝙮 」
│ • 𝙓𝙡 𝙖𝙭𝙞𝙖𝙩𝙖 [087793236775]
│ •𝙏𝙚𝙡𝙠𝙤𝙢𝙨𝙚𝙡 [082147562437]
| • 𝙂𝙊𝙋𝘼𝙔  [08533890541]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6287793236775
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
