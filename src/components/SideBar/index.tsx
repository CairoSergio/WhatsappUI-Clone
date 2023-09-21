"use client"
import SearchArea from "../SearchArea";
import { ScrollArea } from "../ui/scroll-area";
import Header from "./Header";
import CardMessage from "../CardMessage";
import { useUsers } from "@/hooks/useUsers";

export default function SideBar(){
    const data = useUsers()

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
