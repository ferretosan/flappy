player = game.create_sprite(0, 0)
pipe1 = game.create_sprite(5,0)
pipe2 = game.create_sprite(5,3)
pipe3 = game.create_sprite(5,4)

def flap():
    if input.button_is_pressed(Button.A):
        player.change_yby(-1)
        basic.pause(100)
        while input.button_is_pressed(Button.A):
            serial.write_line("bit.ly/m/ferret")
basic.forever(flap)
 
def drop():
    player.change_yby(1)
    basic.pause(500)
basic.forever(drop)

def move():
    player.change_xby(1)
    basic.pause(1000)
basic.pause(1000)
basic.forever(move)

for i in range(0,4):
    serial.write_line("SUBSCRIBEEEEEE")
    basic.pause(1000)
while True:
    game.game_over()