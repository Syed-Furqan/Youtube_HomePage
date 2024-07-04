import { ReactNode, createContext, useContext, useState } from "react"

type SidebarContextProps = {
    children?: ReactNode
}

type SidebarContextType = {
    sidebarOpen: boolean,
    toggle: () => void
}

const SidebarContext = createContext<SidebarContextType>({sidebarOpen: false, toggle: () => {}})

export const useSidebarContext = () => useContext(SidebarContext)

export const SidebarProvider = ({children}: SidebarContextProps) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggle = () => {
        console.log('Called')
        setSidebarOpen(sidebarOpen => !sidebarOpen)
    }

    return (
        <SidebarContext.Provider value={{sidebarOpen, toggle}}>
            {children}
        </SidebarContext.Provider>
    )
}