import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Text from "./Text";

export default function Toast({ className }) {
  const toastContainerStyles = cn(
    "bg-(--grey-900) rounded-2xl",
    "p-6 flex flex-col gap-2",
    className
  );
  return (
    <motion.div
      className={toastContainerStyles}
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut", type: "spring" }}
    >
      <ToastHeading />
      <ToastBody />
    </motion.div>
  );
}

function CheckIcon() {
  return (
    <div className="relative w-6 aspect-square grid place-items-center">
      <FaCheck className="object-contain fill-white" />
    </div>
  );
}

function ToastHeading() {
  return (
    <div className="flex flex-row gap-2">
      <CheckIcon />
      <Text variant="body-md" className="font-bold text-white" as="h3">
        Message Sent!
      </Text>
    </div>
  );
}

function ToastBody() {
  return (
    <Text variant="body-sm" className="text-white opacity-70">
      Thanks for completing the form. We actually did nothing!
    </Text>
  );
}
