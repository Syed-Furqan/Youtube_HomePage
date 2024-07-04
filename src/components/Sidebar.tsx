import { Clapperboard, Home, Library, Repeat, History, PlaySquare, Clock, Flame, ShoppingBag, Music2, Film, Trophy, Radio, Gamepad2 } from "lucide-react";
import { ElementType } from "react";
import LargeSidebarSection from "./LargeSidebarSection";
import LargeSidebarItem from "./LargeSidebarItem";
import { subscriptions } from "../data/sidebarData"; 
import { useSidebarContext } from "../context/SidebarContext";

const Sidebar = () => {
    const { sidebarOpen, toggle } = useSidebarContext()

    return (
        <>
        {!sidebarOpen && 
        <div className="sm_max:hidden sticky top-0 scrollbar-hidden overflow-y-auto pb-4 m-1 flex flex-col lg:hidden">
            <SmallSidebarItem Icon={Home} title="Home" url="/" />
            <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
            <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subcriptions" />
            <SmallSidebarItem Icon={Library} title="You" url="/library" />
        </div>
        }
        {sidebarOpen && <div className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50" onClick={toggle}></div>}
        {sidebarOpen &&
        <div className="w-56 lg:sticky overflow-y-auto scrollbar-hidden pb-8 pt-8 flex flex-col gap-2 px-2 bg-white 
            lg_max:absolute lg_max:top-0 lg_max:z-[1000] lg_max:max-h-screen lg:pt-0"
        >
            <LargeSidebarSection>
                <LargeSidebarItem isActive Icon={Home} title="Home" url="/"/>
                <LargeSidebarItem Icon={Repeat} title="Shorts" url="/shorts"/>
                <LargeSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions"/>
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection>
                <LargeSidebarItem Icon={Library} title="Library" url="/"/>
                <LargeSidebarItem Icon={History} title="History" url="/history"/>
                <LargeSidebarItem Icon={PlaySquare} title="Your Videos" url="/your-videos"/>
                <LargeSidebarItem Icon={Clock} title="Watch Later" url="/playlist?list=WL"/>
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection title="Subscriptions" visibleItemCount={4} >
                {subscriptions.map(subscription => (
                    <LargeSidebarItem 
                        key={subscription.id}
                        Icon={subscription.imgUrl}
                        title={subscription.channelName}
                        url={`/@${subscription.id}`}
                    />
                ))}
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection title="Explore">
                <LargeSidebarItem Icon={Flame} title="Trending" url="/"/>
                <LargeSidebarItem Icon={ShoppingBag} title="Shopping" url="/"/>
                <LargeSidebarItem Icon={Music2} title="Music" url="/"/>
                <LargeSidebarItem Icon={Film} title="Movies & TV" url="/"/>
                <LargeSidebarItem Icon={Radio} title="Live" url="/"/>
                <LargeSidebarItem Icon={Trophy} title="Sports" url="/"/>
                <LargeSidebarItem Icon={Gamepad2} title="Gaming" url="/"/>
            </LargeSidebarSection>
        </div>
        }
        </>
    )
}

type SidebarProps = {
    Icon: ElementType,
    title: string,
    url: string
}

const SmallSidebarItem = ({Icon, title, url}: SidebarProps) => {
    return (
        <a href={url} className={`flex flex-col items-center rounded-lg gap-1 py-4 px-1 hover:bg-secondary-hover`}>
            <Icon className="w-5 h-5" />
            <div style={{fontSize: '10px'}}>{title}</div>
        </a>
    )
}

export default Sidebar;