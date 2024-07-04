import { ElementType } from "react";

type LargeSidebarItemProps = {
    Icon: ElementType | string,
    title: string,
    url: string,
    isActive?: boolean
}


const LargeSidebarItem = ({Icon, title, url, isActive = false}: LargeSidebarItemProps) => {
    return (
        <a href={url} className={`flex items-center rounded-lg gap-3 p-2 mb-1 hover:bg-secondary-hover ${isActive && 'bg-secondary-hover font-bold'}`}>
            {typeof Icon === 'string' ? <img src={Icon} className="w-5 h-5 rounded-full" /> : <Icon className="w-5 h-5" />}
            <div className="whitespace-nowrap overflow-hidden text-ellipsis text-sm">{title}</div>
        </a>
    )
}

export default LargeSidebarItem;