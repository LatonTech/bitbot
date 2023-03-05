let left_line_sensor = 0
let right_line_sensor = 0
basic.forever(function () {
    left_line_sensor = bitbot.readLine(BBLineSensor.Left)
    right_line_sensor = bitbot.readLine(BBLineSensor.Right)
    if (left_line_sensor == 1 && right_line_sensor == 0) {
        bitbot.motor(BBMotor.Left, 30)
        bitbot.motor(BBMotor.Right, 300)
    } else if (left_line_sensor == 0 && right_line_sensor == 1) {
        bitbot.motor(BBMotor.Right, 30)
        bitbot.motor(BBMotor.Left, 300)
    }
})
