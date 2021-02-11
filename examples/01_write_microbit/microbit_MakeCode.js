serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
  if (serial.readLine().includes("aaa")) {
      basic.showIcon(IconNames.Happy)
  } else if (serial.readLine().includes("bbb")) {
      basic.showIcon(IconNames.Yes)
  }
  basic.pause(500)
  basic.clearScreen()
})
