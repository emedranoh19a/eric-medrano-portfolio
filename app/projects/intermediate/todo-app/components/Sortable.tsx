import { useSortable } from "@dnd-kit/react/sortable";
import { cloneElement, ReactElement } from "react";
type SortableProps = {
    id: number;
    index: number;
    children: ReactElement<{ ref?: (element: Element | null) => void }>;
}
export default function Sortable({ id, index, children }: SortableProps) {
    const { ref } = useSortable({ id, index })
    return cloneElement(children, { ref })
}
