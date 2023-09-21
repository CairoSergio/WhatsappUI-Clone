'use client'
import { IconButton, Typography } from "@mui/material";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown, Video } from "lucide-react";
import { MoreVert, Search, VideoCall } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface ChatHeaderProps {
    imagem: string,
    nome: string,
    status: string
}

// #202c33
export default function ChatHeader({imagem, nome, status}: ChatHeaderProps){

    return(
        <header className="w-full bg-primary p-3 relative flex items-center justify-between">
            <div className="flex gap-x-4 items-center">
                <Avatar>
                    <AvatarImage src={imagem}/>
                    <AvatarFallback>
                        {nome && nome[0]}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <Typography sx={{color:'#fff', fontSize:14}}>
                        {nome}
                    </Typography>
                    <Typography sx={{color:'#ffffff7d', fontSize:10}}>
                        {status}
                    </Typography>
                </div>
            </div>
            <div className=" flex gap-x-2">
                <IconButton className="flex gap-x-1 opacity-20 px-3 rounded-full hover:bg-gray-50/10">
                    <Video fill="#fff" size={20} className="text-white"/>
                    <ChevronDown className="text-white" size={18}/>
                </IconButton>
                <IconButton className="hover:bg-gray-50/10">
                    <Search sx={{fontSize: 20, color:"#aebac1"}}/>
                </IconButton>
                <IconButton className="hover:bg-gray-50/10">
                    <MoreVert sx={{fontSize: 20, color:"#aebac1"}}/>
                </IconButton>
            </div>
        </header>
    )
}