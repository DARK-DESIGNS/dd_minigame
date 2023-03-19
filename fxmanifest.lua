fx_version 'cerulean'
game 'gta5'

author 'DARK DESIGNS'
description 'An click time event minigame'
version '1.0.0'

lua54 'on'

ui_page 'html/index.html'

files {
    "html/index.html",
    "html/style.css",
    "html/scripts.js",
    "html/img/key.png"
}

client_scripts {
    'config.lua',
    'client/main.lua',
}