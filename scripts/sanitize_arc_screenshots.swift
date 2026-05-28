import AppKit

let sourceDir = "/Users/zuzelka/Downloads/Ginja_website"
let outputDir = "/Users/zuzelka/ginja_website/Ginja_App/frontend/public/images/arc"

try? FileManager.default.createDirectory(atPath: outputDir, withIntermediateDirectories: true)

func color(_ hex: String, _ alpha: CGFloat = 1.0) -> NSColor {
  let value = hex.trimmingCharacters(in: CharacterSet(charactersIn: "#"))
  var rgb: UInt64 = 0
  Scanner(string: value).scanHexInt64(&rgb)
  return NSColor(
    calibratedRed: CGFloat((rgb >> 16) & 0xff) / 255.0,
    green: CGFloat((rgb >> 8) & 0xff) / 255.0,
    blue: CGFloat(rgb & 0xff) / 255.0,
    alpha: alpha
  )
}

func rectFromTop(x: CGFloat, y: CGFloat, w: CGFloat, h: CGFloat, imageHeight: CGFloat) -> NSRect {
  NSRect(x: x, y: imageHeight - y - h, width: w, height: h)
}

func drawAvatar(height: CGFloat) {
  let outer = NSBezierPath(ovalIn: rectFromTop(x: 1112, y: 2548, w: 92, h: 92, imageHeight: height))
  color("ED8522").setFill()
  outer.fill()

  let inner = NSBezierPath(ovalIn: rectFromTop(x: 1120, y: 2556, w: 76, h: 76, imageHeight: height))
  color("2C241F").setFill()
  inner.fill()

  let style = NSMutableParagraphStyle()
  style.alignment = .center
  let attrs: [NSAttributedString.Key: Any] = [
    .font: NSFont.systemFont(ofSize: 28, weight: .bold),
    .foregroundColor: color("F4E9DD"),
    .paragraphStyle: style
  ]
  ("AC" as NSString).draw(in: rectFromTop(x: 1112, y: 2574, w: 92, h: 36, imageHeight: height), withAttributes: attrs)
}

func fillRounded(x: CGFloat, y: CGFloat, w: CGFloat, h: CGFloat, imageHeight: CGFloat, fill: NSColor, radius: CGFloat) {
  let path = NSBezierPath(roundedRect: rectFromTop(x: x, y: y, w: w, h: h, imageHeight: imageHeight), xRadius: radius, yRadius: radius)
  fill.setFill()
  path.fill()
}

func drawText(_ text: String, x: CGFloat, y: CGFloat, w: CGFloat, h: CGFloat, imageHeight: CGFloat, size: CGFloat, weight: NSFont.Weight = .bold) {
  let attrs: [NSAttributedString.Key: Any] = [
    .font: NSFont.systemFont(ofSize: size, weight: weight),
    .foregroundColor: color("FFFFFF")
  ]
  (text as NSString).draw(in: rectFromTop(x: x, y: y, w: w, h: h, imageHeight: imageHeight), withAttributes: attrs)
}

for file in ["Arc_entry", "Arc_goal_habit", "Arc_overview", "Arc_entry_light", "Arc_goal_habit_light", "Arc_overview_light"] {
  guard let image = NSImage(contentsOfFile: "\(sourceDir)/\(file).PNG") else { continue }
  let canvas = NSImage(size: image.size)
  canvas.lockFocus()
  image.draw(in: NSRect(origin: .zero, size: image.size))
  drawAvatar(height: image.size.height)
  if file == "Arc_overview" {
    fillRounded(x: 90, y: 1010, w: 870, h: 104, imageHeight: image.size.height, fill: color("30251F", 1.0), radius: 10)
    drawText("My Fitness Arc", x: 104, y: 1025, w: 700, h: 74, imageHeight: image.size.height, size: 54)
  }
  canvas.unlockFocus()

  if let tiff = canvas.tiffRepresentation,
     let rep = NSBitmapImageRep(data: tiff),
     let data = rep.representation(using: .png, properties: [.compressionFactor: 0.9]) {
    try? data.write(to: URL(fileURLWithPath: "\(outputDir)/\(file).png"))
    print("Wrote \(file).png")
  }
}
