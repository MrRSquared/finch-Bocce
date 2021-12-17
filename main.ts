finch.startFinch()
// Add your code before this line
finch.stopMotors()
while (true) {
    if (finch.getFinchAM(AorM.Accelerometer, Dimension.Y) >= 1.5 || finch.getFinchAM(AorM.Accelerometer, Dimension.X) >= 1.5) {
        for (let index = 0; index <= 5; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            finch.setTail(TailPort.All, 2, 0, 0)
            finch.setBeak(2, 0, 0)
            finch.startMotors(randint(-75, 75), randint(-75, 75))
            basic.pause(500)
        }
        finch.stopMotors()
        basic.pause(500)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    finch.setTail(TailPort.All, 0, 2, 0)
    finch.setBeak(0, 2, 0)
}
