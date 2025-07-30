import { Outfit } from "next/font/google"
import Image from "next/image"
import { qrCode } from "./imageIndex"
import styles from "./styles.module.css"
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] })

function Page() {
  return <div className={`${outfit.className} ${styles.outlet}`}>
    <div className={styles.content}>
      <QRImage />
      <CardContent />
    </div>
  </div>
}

function QRImage() {
  return <div className={styles.imageContainer}>
    <Image
      src={qrCode}
      fill
      alt=""
      className="object-fit"
    />
  </div>
}
function CardContent() {
  return <div className={styles.textContainer}>
    <h1 className={styles.textPreset1}>
      Improve your front-end <br /> skills by building projects
    </h1>
    <p className={styles.textPreset2}>
      Scan the QR code to visit Frontend Mentor and take your coding
      skills to the next level.
    </p>
  </div>
}

export default Page
