const detector = require('./dosDetector')

const dos_detector = new detector.DOS_Detector(3000);

dos_detector.addUrl("test1")
setTimeout(() => dos_detector.addUrl("test1"),2000)
dos_detector.addUrl("test2")


