"use client"
import ChatHeader from "@/components/ChatHeader"
import Mymessage from "@/components/mymessage"
import MicrophoneIcon from "@/components/ui/Microphone"
import SmileIcon from "@/components/ui/Smile"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import UserMessage from "@/components/usermessage"
import { usersData } from "@/data/users"
import { User } from "@/interfaces/user"
import { IconButton } from "@mui/material"
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
interface ChatProps {
    params : {
        id: number
    }
}

export default function Chat({ params } : ChatProps){
    const [data, setData] = useState<User[]>([])

    useEffect(()=>{
        const response = usersData.filter((userId)=> userId.id == params.id);
        setData(response)
    },[params.id])


    return(
        <main className="h-screen w-full flex flex-col bg-[#0b141a] relative">
            <div className="conversation absolute w-full h-full opacity-5 top-0 left-0"></div>
            <ChatHeader status={data[0]?.status} imagem={data[0]?.image!} nome={data[0]?.name}/>
            <div className="flex-grow  px-[70px] py-6 gap-y-4 flex flex-col justify-end overflow-y-scroll">
                {
                    data[0] &&
                    data[0].messages.map((mes,i)=>(
                        <>
                            {
                                mes.from === data[0].id ?
                                <UserMessage key={i} time={mes.date} message={mes.message}/>:
                                <Mymessage key={i} time={mes.date} message={mes.message}/>
                            }
                        </>
                    ))
                }
            </div>
            <div className="px-4 gap-x-3 py-2 relative w-full bg-primary flex justify-between items-center">
                <IconButton className="hover:bg-gray-50/10">
                    <Plus color="#8696a0" size={24}/>
                </IconButton>
                <div className="relative flex flex-grow">
                    <IconButton className="absolute">
                        <SmileIcon/>
                    </IconButton>
                    <Input
                        className="pl-12 flex-grow bg-[#2a3942] border-none outline-none text-white"
                        placeholder="Digite uma mensagem"
                    />

                </div>
                <IconButton className="hover:bg-gray-50/10">
                    <MicrophoneIcon/>
                </IconButton>
            </div>
        </main>
    )
}

// #2a3942
