import Bar2 from "./ui/bar2";

interface UserMessageProps {
    time: string,
    message: string
}

export default function UserMessage({time, message} : UserMessageProps){
    return(
        <div className="rounded-md p-1 rounded-tl-none w-max bg-primary flex flex-col max-w-lg relative">
            <div className="absolute -left-2 top-0">
                <Bar2/>
            </div>
            <p className="text-sm text-white">
                {message}
            </p>
            <p className="text-xs text-white/40 font-thin self-end">{time}</p>
        </div>
    )
}
