input.onGesture(Gesture.TiltLeft, function () {
    if (x > 0) {
        led.unplot(x, y)
        x += -1
    }
})
input.onButtonPressed(Button.A, function () {
    if (y > 0) {
        led.unplot(x, y)
        y += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (y < 4) {
        led.unplot(x, y)
        y += 1
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (x < 4) {
        led.unplot(x, y)
        x += 1
    }
})
let y = 0
let x = 0
x = 2
y = 2
basic.forever(function () {
    led.plot(x, y)
})
