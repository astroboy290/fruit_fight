sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy(effects.fire, 100)
    info.changeScoreBy(3)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 5 5 5 5 5 5 5 5 2 . . . . 
2 5 5 5 8 8 8 8 8 8 5 2 . . . . 
2 5 8 8 8 9 9 9 9 8 5 2 . . . . 
2 5 8 9 9 6 6 6 9 8 5 2 . . . . 
2 5 8 8 8 9 9 9 9 8 5 2 . . . . 
2 5 5 5 8 8 8 8 8 8 5 2 . . . . 
2 2 2 5 5 5 5 5 5 5 5 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogey.destroy()
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let bogey: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . 8 7 7 7 7 8 . . . . . . . 
. 8 8 8 8 7 9 9 7 8 8 8 8 8 . . . 
. 8 7 7 7 7 9 9 7 7 7 7 7 8 . . . 
. 8 7 9 9 9 9 9 9 9 9 9 7 8 . . . 
. 8 7 7 7 7 9 7 7 7 7 7 7 8 . . . 
. 8 8 8 8 7 9 7 8 8 8 8 8 8 . . . 
. . . . 8 7 9 7 8 . . . . . . . . 
. . . . 8 9 9 9 8 . . . . . . . . 
. . . . 8 9 8 9 8 . . . . . . . . 
. . . . 8 9 8 9 8 . . . . . . . . 
8 8 8 8 8 9 8 9 8 . . . . . . . . 
8 5 4 2 9 9 8 9 8 . . . . . . . . 
8 8 8 8 8 8 8 9 8 . . . . . . . . 
. . 8 5 4 2 9 9 8 . . . . . . . . 
. . 8 8 8 8 8 8 8 . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(spacePlane, 200, 200)
info.setLife(99)
game.onUpdateInterval(200, function () {
    bogey = sprites.create(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
