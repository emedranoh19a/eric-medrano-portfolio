export default function List({ children }) {
    return <ul className="list-disc list-inside marker:text-red-500">
        {children}
    </ul>
}
function ListItem() {
    return <li></li>
}
