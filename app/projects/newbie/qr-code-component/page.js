import { Outfit } from "next/font/google"
import Image from "next/image"
import styles from "./styles.module.css"
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] })

function Page() {
  // return (
  //   <div className={`bg-slate-300 w-full h-screen flex relative justify-center items-center ${outfit.className}`}>
  //     <div className="bg-white min-w-10 max-w-80 h-fit p-5 rounded-lg">
  //       <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
  //         <Image
  //           src="/projects/newbie/qr-code-component/images/image-qr-code.png"
  //           fill
  //           objectFit="fit"
  //           alt=""
  //           className="w-full"
  //         />
  //       </div>
  //       <div className="px-3">
  //         <h3 className="mb-3 text-xl text-center text-slate-900 font-bold">
  //           Improve your front-end <br /> skills by building projects
  //         </h3>
  //         <p className="text-center text-slate-500 text-sm">
  //           Scan the QR code to visit Frontend Mentor and take your coding
  //           skills to the next level.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // )
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
      src="/projects/newbie/qr-code-component/images/image-qr-code.png"
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
