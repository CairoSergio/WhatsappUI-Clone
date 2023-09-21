"use client"
import { Input } from "./ui/input";
import { IconButton } from '@mui/material';
import { Search, FilterList, ArrowBack } from '@mui/icons-material'
import { useState } from "react";
interface SearchAreaProps {

}
export default function SearchArea(props : SearchAreaProps){
    const [focus, setFocus] = useState<boolean>(false)
    return(
        <div className="px-4 py-2 w-full">
            <div className="relative flex items-center justify-between">
                <Input
                    onFocus={()=>setFocus(true)}
                    onBlur={()=>setFocus(false)}
                    placeholder="Pesquisar ou começar uma nova conversa"
                    className="pl-12 focus-visible:bottom-0 outline-none border-none bg-primary flex-grow rounded-lg py-1 text-white font-light text-xs"
                />
                <div className="absolute h-full left-1  flex items-center justify-center">
                    <IconButton className="hover:bg-gray-50/5">
                        {
                            focus ?
                            <ArrowBack sx={{fontSize:17, color:'#00a884'}}/>:
                            <Search  sx={{fontSize:17, color:'#ffffff78'}}/>
                        }
                    </IconButton>
                </div>
                <IconButton>
                    <FilterList sx={{fontSize:24, color:'#ffffff78'}}/>
                </IconButton>
            </div>
        </div>
    )
}
