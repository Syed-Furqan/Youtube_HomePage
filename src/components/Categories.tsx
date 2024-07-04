import { useEffect, useRef, useState } from "react";
import MyButton from "./MyButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryProps = {
    categories: string[]
}

const Categories = ({ categories }: CategoryProps) => {

    const shiftVal: number = 200

    const [active, setActive] = useState(categories[0])
    const [translate, setTranslate] = useState(0)

    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)

    const categoriesRef = useRef<HTMLDivElement>(null)

    
    const moveLeft = () => {
        setTranslate(translate => {
            return (translate + shiftVal > 0) ?  0 : translate + shiftVal
        })
    }

    const moveRight = () => {
        if(categoriesRef.current) {
            const clientWidth: number = categoriesRef.current.clientWidth
            const scrollWidth: number = categoriesRef.current.scrollWidth

            console.log(scrollWidth - clientWidth)

            setTranslate(translate => {
                return (translate - shiftVal < -(scrollWidth - clientWidth)) ? -(scrollWidth - clientWidth) : translate - shiftVal
            })
        }
    }

    useEffect(() => {
        if(categoriesRef.current) {
            setShowLeft(!(translate === 0))
            setShowRight(!(translate === -(categoriesRef.current.scrollWidth - categoriesRef.current.clientWidth)))
        }
    }, [categories, translate])

    return (
        <div ref={categoriesRef} className="overflow-x-hidden relative">
            <div className={`flex gap-3 transition-transform w-[max-content]`} style={{transform: `translateX(${translate}px)`}}>
                {categories.map(category => (
                    <MyButton 
                        key={category}
                        className={`px-3 py-1 rounded-lg ${active === category ? 'bg-secondary-dark text-secondary' : 'bg-secondary'}`} 
                        onClick={() => setActive(category)}
                        isactive={active === category}
                    >
                        {category}
                    </MyButton>
                ))}
            </div>
            {showLeft && 
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
                <MyButton className="h-full aspect-square w-auto"
                    onClick={moveLeft}
                >
                    <ChevronLeft size={21} />
                </MyButton>
            </div>
            }   
            {showRight &&    
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
                <MyButton className="h-full aspect-square w-auto"
                    onClick={moveRight}
                >
                    <ChevronRight size={21} />
                </MyButton>
            </div>
            }
        </div>
    )
}

export default Categories;