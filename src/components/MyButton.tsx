import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    active?: boolean
}

const MyButton: React.FC<Props> = ({ children, ...props}) => {

    const { className, ...rest } = props

    return (
        <button 
            className={`
              hover:${props.active ? 'bg-black' : 'bg-secondary-hover'} 
                transition-colors duration-300 
                rounded-full 
                p-1.5
                ${props.className}
                `}    
            {...rest}
        >
            {children}
        </button>
    )
}

export default MyButton;