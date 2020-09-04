radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.servoWritePin(AnalogPin.P0, 0)
    } else if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
radio.setGroup(214)
