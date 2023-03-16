input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, 0)
        x += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, 0)
        x += 1
    }
})
let x = 0
x = 2
basic.forever(function () {
    led.plot(x, 0)
})
