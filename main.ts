forever(function () {
    tiles.setTilemap(tilemap`l1`)
    pause(900)
    tiles.setTilemap(tilemap`l2`)
    pause(900)
})
forever(function () {
    music.playMelody("C5 B C5 B G G F - ", 120)
    music.playMelody("C5 B C5 F E G D C ", 120)
    music.playMelody("C5 B C5 B A E G D ", 120)
    music.playMelody("C5 B C5 B E G F A ", 120)
    music.playMelody("C5 B C5 D E F E A ", 120)
})