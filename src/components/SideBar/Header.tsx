"use client"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IconButton } from '@mui/material'
import { Groups, MoreVert } from '@mui/icons-material'
import Status from "../ui/status";
import MessagerIcon from "../ui/messager";

export default function Header(){
    return(
        <header className="w-full p-3 bg-primary flex justify-between">
            <Avatar>
                <AvatarImage src="https://github.com/cairosergio.png"/>
                <AvatarFallback>CS</AvatarFallback>
            </Avatar>
            <div className="flex gap-x-2">
                <IconButton className="hover:bg-gray-50/10">
                    <Groups sx={{fontSize: 24, color:"#aebac1"}}/>
                </IconButton>
                <IconButton className="hover:bg-gray-50/10">
                    <Status size={24}/>
                </IconButton>
                <IconButton className="hover:bg-gray-50/10">
                    <MessagerIcon size={24}/>
                </IconButton>
                <IconButton className="hover:bg-gray-50/10">
                    <MoreVert sx={{fontSize: 24, color:"#aebac1"}}/>
                </IconButton>
            </div>
        </header>
    )
}