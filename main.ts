let player = game.createSprite(0, 0)
let pipe1 = game.createSprite(5, 0)
let pipe2 = game.createSprite(5, 3)
let pipe3 = game.createSprite(5, 4)
basic.forever(function flap() {
    if (input.buttonIsPressed(Button.A)) {
        player.changeYBy(-1)
        basic.pause(100)
        while (input.buttonIsPressed(Button.A)) {
            serial.writeLine("bit.ly/m/ferret")
        }
    }
    
})
basic.forever(function drop() {
    player.changeYBy(1)
    basic.pause(500)
})
basic.pause(1000)
basic.forever(function move() {
    player.changeXBy(1)
    basic.pause(1000)
})
for (let i = 0; i < 4; i++) {
    serial.writeLine("SUBSCRIBEEEEEE")
    basic.pause(1000)
}
while (true) {
    game.gameOver()
}
