import { ReactNode, Children, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type LargeSidebarSectionProps = {
    children?: ReactNode,
    title?: string,
    visibleItemCount?: number
}

const LargeSidebarSection = ({children, title, visibleItemCount = Number.POSITIVE_INFINITY}: LargeSidebarSectionProps) => {
    const [ isExpanded, setIsExpanded ] = useState(false)
    const childrenArray = Children.toArray(children).flat()
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)
    const showExpandButton = childrenArray.length > visibleItemCount

    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown

    return (
        <div>
            {title && <div className="ml-4 my-2 text-mb mg-1">{title}</div>}
            {visibleChildren}
            {showExpandButton && 
            <button onClick={() => setIsExpanded((isExpanded) => !isExpanded)} className="w-full flex items-center rounded-lg gap-2 p-1">
                {<ButtonIcon className="w-5 h-5" />}
                <div className="text-sm">{isExpanded ? 'Show Less' : 'Show More'}</div>
            </button>}
        </div>
    )
}

export default LargeSidebarSection;