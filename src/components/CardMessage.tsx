"use client"
import { User } from "@/interfaces/user"
import { CardActionArea, Typography } from "@mui/material"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DoneAll } from "@mui/icons-material"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
interface CardMessageProps {
    user: User
}

export default function CardMessage({user} : CardMessageProps){
    const [ ativo, setAtivo ] = useState(false)

    const pathname = usePathname();

    useEffect(()=>{
        if(pathname === `/${user.id}`){
            setAtivo(true)
            return;
        }
        setAtivo(false)
    },[pathname, user.id])

    return(
        <div className={`hover:bg-[#2a39427d] ${ativo ? "bg-[#2a3942]" : ''} w-full group`}>
            <a  href={`/${user.id}`} className="px-4 items-center justify-start gap-x-4 flex">
                <Avatar>
                    <AvatarImage src={user.image}/>
                    <AvatarFallback>
                        {user.name[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <div className="w-full py-2 border-b border-white/10">
                    <div className="w-full flex justify-between">
                        <Typography className="text-white font-light">
                            {user.name}
                        </Typography>
                        <Typography  className="text-white/50 font-light text-xs">
                            {user.messages[user.messages.length - 1].date}
                        </Typography>
                    </div>
                        <div className="w-full flex overflow-hidden justify-between">
                            <Typography  className="text-white/50 font-light text-xs">
                                {
                                    user.messages[user.messages.length - 1].viewed ? 
                                    <DoneAll sx={{fontSize:14 , color:"#00b3ea"}}/> : 
                                    <DoneAll sx={{fontSize:14}}/>  
                                }
                                {'  '}
                                { user.messages[user.messages.length - 1].message}
                            </Typography>
                            <ChevronDown color="rgb(255 255 255 / 0.5)" className="group-hover:translate-x-0 group-hover:opacity-100 opacity-0 translate-x-5 transition-transform duration-100"/>
                        </div>
                </div>
            </a>
        </div>
    )
}