"use client"
import {Card, CardActionArea, Typography } from "@mui/material";
import SearchArea from "../SearchArea";
import { ScrollArea } from "../ui/scroll-area";
import Header from "./Header";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown } from "lucide-react";
import { usersData } from "@/data/users";
import { useEffect, useState } from "react";
import { User } from "@/interfaces/user";
import { shuffleArray } from "../../utils/shuffleArray";
import { DoneAll } from '@mui/icons-material'
import { useGithubAvatars } from "@/hooks/useGitHubAvatars";
import CardMessage from "../CardMessage";

export default function SideBar(){
    const [data, setdata] = useState<User[]>([])

    useEffect(()=>{

        const multiplied = [
            ...usersData,
            ...usersData,
        ]

        if (multiplied.length > 0) {
            fetchAvatars();
        }

        async function fetchAvatars() {
            const { images, error } = await useGithubAvatars(multiplied.length);
    
            if(images){
                const updatedData = multiplied.map((user, i) => ({
                    ...user,
                    image: images[i]?.avatar_url || ''
                }));
                setdata(updatedData);
            }
        }
    
    },[])


    return(
        <main className="min-w-[30%] max-h-screen flex flex-col border-r border-r-border/20">
            <Header/>
            <SearchArea/>
            <ScrollArea className="flex-grow">
                {
                    data.map((user,i)=>(
                        <CardMessage user={user} key={i}/>
                    ))
                }
            </ScrollArea>
        </main>
    )
}
