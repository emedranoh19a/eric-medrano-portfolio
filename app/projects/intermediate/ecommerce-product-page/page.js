"use client"

import { useEffect, useRef } from "react"
import { create } from "zustand"
const useWholeStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })), //A function that sets based on prevState
}))

// function useFromStore(key) {
//     // const names = useBearFamilyStore(useShallow((state) => Object.keys(state)))
//     return useWholeStore((state) => state[key]))
// }

//The following key parameter is a string. WORKS LIKE WONDER
function useSingleFromStore(key) {
    return useWholeStore((state) => state[key])
}
function useMultipleFromStore(...keys) {

    //Create in here a loop . It should return an object of the specified keys.
}
function useStore() {
    //WORNG option
    const methods = useWholeStore((state) => ({
        count: state.count,
        increment: state.increment
    }))
    // return { count, increment }
    //TODO: try this.
    // const { count, increment } = useWholeStore((state) => ({
    //     count: state.count,
    //     increment: state.increment,
    // }))
    return methods
}
export default function Page() {
    //State:
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current += 1
        console.log(`App has rendered ${renderCount.current} times`)
    })

    return <div className="grid place-items-center">
        <Container />
    </div>
}

function Container({ children }) {
    //State:
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current += 1
        console.log(`Container has rendered ${renderCount.current} times`)
    })
    return <div>
        <Label />
        <Button />
    </div>
}
function Label() {
    //State:
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current += 1
        console.log(`Label has rendered ${renderCount.current} times`)
    })
    const { count } = useWholeStore()
    return <div className="bg-gray-200 text-black min-w-20 min-h-10">{count}</div>
}
function ButtonPlus() {
    //State:
    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current += 1
        console.log(`Button has rendered ${renderCount.current} times`)
    })
    const increment = useSingleFromStore("increment")
    console.log(increment)
    return <button onClick={increment}>button</button>
}
// const { count, increment } = useStore();
// return (
//   <div>
//      <p>{count}</p>
//      <button onClick={increment}>+1</buttoon>
//   </div>
