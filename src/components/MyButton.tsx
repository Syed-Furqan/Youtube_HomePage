import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    isactive?: boolean
}

const MyButton: React.FC<Props> = ({ children, ...props}) => {

    const { className, ...rest } = props

    return (
        <button 
            className={`
              hover:${props.isactive ? 'bg-black' : 'bg-secondary-hover'} 
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