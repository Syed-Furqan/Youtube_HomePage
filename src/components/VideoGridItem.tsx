import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import { useEffect, useRef, useState } from "react"

type VideoGridItemProps = {
    id: string,
    title: string,
    channel: {
        id: string,
        name: string,
        profileUrl: string
    },
    views: number,
    postedAt: Date,
    duration: number,
    thumbnailUrl: string,
    videoUrl: string
}

const FORMAT_VIEWS = Intl.NumberFormat(undefined, {notation: "compact"})

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const VideoGridItem = ({ id, title, channel, views, postedAt, duration, thumbnailUrl, videoUrl }: VideoGridItemProps) => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if(videoRef.current) {
            if(isVideoPlaying)
                videoRef.current.play()
            else
                videoRef.current.pause()
        }
    }, [isVideoPlaying])

    return (
        <div className="flex flex-col gap-2">
            <a href={`/watch?v=${id}`} className="relative aspect-video" 
                onMouseEnter={() => setIsVideoPlaying(true)}
                onMouseLeave={() => setIsVideoPlaying(false)}
            >
                <img src={thumbnailUrl} className="block w-full h-full object-cover rounded-xl"/>
                <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary px-0.5 rounded">
                    {duration}
                </div>
                <video 
                    className={`block absolute h-full object-cover inset-0 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}
                    ref={videoRef}
                    muted
                    playsInline
                    src={videoUrl}
                />
            </a>
            <div className="flex gap-2">
                <a href={`/@${channel.id}`} className="flex-shrink-0">
                    <img className="w-10 h-10 rounded-full" src={channel.profileUrl} />
                </a>
                <div className="flex flex-col">
                    <a href={`/watch?v=${id}`} className="font-bold">
                        {title}
                    </a>
                    <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
                        {channel.name}
                    </a>
                    <div className="text-secondary-text text-sm">
                        {`${FORMAT_VIEWS.format(views)} views • ${timeAgo.format(postedAt)}`} 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoGridItem;