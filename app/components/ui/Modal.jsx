"use client";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { cn } from "@/app/utils/utils";
import {
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

// const StyledModal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-lg);
//   box-shadow: var(--shadow-lg);
//   padding: 3.2rem 4rem;
//   transition: all 0.5s;
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;

// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;
//   position: absolute;
//   top: 1.2rem;
//   right: 1.9rem;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     /* Sometimes we need both */
//     /* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
//     color: var(--color-grey-500);
//   }
// `;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalOpen({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

export function ModalWindow({
  children,
  name,
  overlayStyles = "",
  modalStyles = "",
  closeButtonStyles = "",
  closeIconStyles,
}) {
  //State:
  const { openName, close } = useContext(ModalContext);
  const ref = useRef(null);
  useClickOutside(ref, close);

  //Style:
  const overlayCn = cn(
    "fixed w-full h-screen z-50 inset-0",
    "bg-black/50 backdrop-blur-xs",
    "transition-all duration-500",
    overlayStyles
  );

  const modalCn = cn(
    "fixed p-8 bg-gray-50 rounded-lg shadow-lg",
    "transform top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2",
    "transition-all duration-500",
    modalStyles
  );
  const buttonCn = cn(
    "absolute top-3 right-5 translate-x-2",
    "p-1 bg-transparent hover:bg-gray-200",
    "transition-all duration-200 ",
    closeButtonStyles
  );
  const iconCn = cn("w-6 h-6 text-gray-500", closeIconStyles);

  if (name !== openName) return null;
  return createPortal(
    <div className={overlayCn}>
      <div ref={ref} className={modalCn}>
        <button onClick={close} className={buttonCn}>
          <HiXMark className={iconCn} />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
