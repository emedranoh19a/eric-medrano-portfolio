import { cn, toKebabCase } from "@/app/utils/utils";
import Image from "next/image";
import HighlightText from "./HighlightText";

export default function Notification({
  subject,
  predicate,
  isRead,
  date,
  highlight,
  highlightType,
  photo,
  boxMessage,
  setNotifications,
}) {
  //Style:
  const containerStyles = cn(
    "relative  flex p-3  justify-start rounded-lg w-full cursor-pointer",
    boxMessage && "flex-col",
    isRead ? "" : "bg-[var(--grayish-blue-50)]"
  );
  //Dataflow:
  const kebabName = toKebabCase(subject);
  const avatarUrl = `/projects/beginner/notifications-page/images/avatar-${kebabName}.webp`;
  //Handlers:
  function onSetUnread() {
    //find the notification.
    //if found, set that to unread.
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.subject === subject
          ? { ...notification, isRead: true }
          : notification
      )
    );
  }
  return (
    <li className={containerStyles} onClick={onSetUnread}>
      <div className="flex flex-row">
        <div className="h-10 aspect-square relative mr-2 cursor-pointer">
          <Image
            alt={`Avatar of ${subject}`}
            src={avatarUrl}
            fill
            className="object-contain"
          />
        </div>
        <div className="text-sm">
          <p>
            <span className="font-bold hover:text-[var(--blue)] hover:cursor-pointer transition-colors">
              {subject}{" "}
            </span>{" "}
            <HighlightText
              text={predicate}
              highlight={highlight}
              highlightType={highlightType}
              isRead={isRead}
            />
          </p>
          <span className="text-[var(--grayish-blue-300)] text-xs">{date}</span>
        </div>
      </div>
      {photo && (
        <div className="relative w-10 aspect-square ml-auto rounded-md overflow-hidden">
          <Image src={photo} fill className="object-cover" />
        </div>
      )}
      {boxMessage && (
        <div className="hover:cursor-pointer hover:bg-[var(--grayish-blue-100)] ml-12 mt-2 border border-[var(--grayish-blue-200)] rounded-md p-2.5">
          <p className="text-sm text-[var(--grayish-blue-500)]">{boxMessage}</p>
        </div>
      )}
    </li>
  );
}
