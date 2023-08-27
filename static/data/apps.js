var apps = [
  {
    'id': 'customapp',
    'title': 'Add custom app',
    'image': 'assets/addicon.png'
  },
  {
    "id": "google",
    "title": "Google",
    "url": "https://www.google.com/?safe=active&ssui=on",
    'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg'
    
  },
  {
    "id": "discord",
    "title": "Discord",
    "url": "https://discord.com/app",
    'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
  },
  {
    "id": "geforce",
    "title": "HIRO",
    "url": "https://hero-wars.com",
    'image': 'data:image/jpeg;base64,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'
  },
  {
    'id': 'vscode',
    'title': 'Visual Studio Code',
    'url': 'https://vscode.dev/',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png'
  },
  {
    "id": "tiktok",
    "title": "TikTok",
    "url": "https://tiktok.com",
    'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png'
  },
  {
    "id": "reddit",
    "title": "Reddit",
    "url": "https://reddit.com",
    'image': 'https://www.redditinc.com/assets/images/site/reddit-logo.png'
  },
  {
    "id": "youtube",
    "title": "YouTube",
    "url": "https://youtube.com",
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png'
  },
  {
    "id": "twitter",
    "title": "Twitter",
    "url": "https://twitter.com",
    'image': 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png'
  },
  {
    'id': 'spotify',
    'title': 'Spotify',
    'url': 'https://open.spotify.com/browse',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'
  },
  {
    'id': 'chess',
    'title': 'Chess.com',
    'url': 'https://chess.com',
    'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png'
  },
  {
    'id': 'sflix',
    'title': 'SFlix',
    'url': 'https://sflix.to',
    'image': 'https://play-lh.googleusercontent.com/YO-cgAQEdDuX9xvEYNOdPfc0-Nxzvz4vZaIt9eBOWoh2VTPHe8eHX6byn5b94X3gpcI=s200'
  },
  {
    'id': 'coolmathgames',
    'title': 'Cool Math Games',
    'url': 'https://coolmathgames.com',
    'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512'
  },
  {
    'id': 'win11',
    'title': 'Windows 11 in React',
    'url': 'https://win11.blueedge.me/',
    "image": "https://cdn.upload.systems/uploads/lnysPmIS.png",
    "description": "A remake of the Windows 11 UI in React.js"
  },
  {
    'id': 'gbaemulator',
    'title': 'GBA Emulator',
    'url': 'https://cattn.github.io/gba',
    "image": "https://cattn.github.io/gba/pwa/apple-icon-180.png",
    "description": "A Game Boy Advance retro emulator with over 3000 games, and other consoles as well"
  }
]

var customapps = JSON.parse(localStorage.getItem("customapps"))
customapps.forEach(app => {
  apps.push(app)
})

console.log("Loaded " + apps.length + " apps")
console.log("Loaded " + customapps.length + " custom apps")
