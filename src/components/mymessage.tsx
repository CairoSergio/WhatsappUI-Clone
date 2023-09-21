import Bar from "./ui/bar";

interface MymessageProps {
    message: string,
    time: string
}
export default function Mymessage({message, time} : MymessageProps){
    return(
        <div className="self-end rounded-md p-1 rounded-tr-none bg-[#005c4b] flex flex-col max-w-lg relative">
            <div className="absolute -right-[8px] top-0">
                <Bar/>
            </div>
            <p className="text-sm text-white">
                {message}
            </p>
            <p className="text-xs text-white/40 font-thin self-end">{time}</p>
        </div>
    )
}