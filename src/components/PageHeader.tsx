import { useState } from 'react';
import logo from '../assets/YouTube_Logo.png';
import MyButton from './MyButton';
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import { useSidebarContext } from '../context/SidebarContext';

const PageHeader = () => {

    const [showSearch, setShowSearch] = useState(false)

    const { toggle } = useSidebarContext()

    return (
        <div className="flex justify-between items-center py-2 px-5 mb-6 gap-10">
            <div className={`${!showSearch ? 'flex' : 'hidden'} gap-3 items-center`}>
                <MyButton onClick={toggle}>
                    <Menu />
                </MyButton>
                <a href="/">
                    <img src={logo} className="w-24 min-w-16" />
                </a>
            </div>
            <div className={`${showSearch ? 'flex' : 'hidden md:flex'} flex-grow items-center justify-center gap-3 `}>
                {showSearch && 
                <MyButton onClick={() => setShowSearch(false)}>
                    <ArrowLeft />
                </MyButton>}
                <div className="flex flex-grow max-w-[600px]">
                    <input 
                        type='search'
                        placeholder='Search'
                        className='rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full
                        focus:border-blue-500 outline-none'
                    />
                    <MyButton className='bg-secondary rounded-r-full rounded-l-none py-1.5 px-4 hover:bg-secondary-hover
                        border border-secondary-border border-l-0'>
                        <Search />
                    </MyButton>
                </div>
                <MyButton className='bg-secondary'>
                    <Mic />
                </MyButton>
            </div>
            <div className={`${!showSearch ? 'flex' : 'hidden'} md:gap-2 lg:gap-4`}>
                <MyButton className="md:hidden" onClick={() => setShowSearch(true)}>
                    <Search />
                </MyButton>
                <MyButton className="md:hidden">
                    <Mic />
                </MyButton>
                <MyButton>
                    <Upload />
                </MyButton>
                <MyButton>
                    <Bell />
                </MyButton>
                <MyButton>
                    <User />
                </MyButton>
            </div>
        </div>
    );
}

export default PageHeader;