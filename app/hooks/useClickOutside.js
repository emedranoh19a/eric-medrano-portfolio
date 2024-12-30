import { useEffect } from "react"

export function useClickOutside(ref, callback) {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback()
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    })
}
//Note: usage
// function ClickBox  ({ onClickOutside }) {
//     const clickRef = useRef();
//     useClickOutside(clickRef, onClickOutside);
  
//     return (
//       <div
//         ref={clickRef}
//       >
//         <p>Click out of this element</p>
//       </div>
//     );
//   };
  

