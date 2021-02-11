basic.forever(function () {
  basic.pause(300)
  serial.writeLine("X:" + input.acceleration(Dimension.X))
  serial.writeLine("Y:" + input.acceleration(Dimension.Y))
  serial.writeLine("Z:" + input.acceleration(Dimension.Z))
})
