import { Button } from "@/components/ui/button";
import { Lock } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Home() {

  return (
    <main className="h-screen relative w-[70%] bg-primary flex flex-col items-center justify-center">
        <img src="/img2.png" className="w-80"/>
        <Typography sx={{color:'#fff', fontWeight:200}} className="mt-8" variant="h4">
          Baixar o whatsapp para windows
        </Typography>
        <Typography sx={{color:'#ffffffb9', fontWeight:200}} className="mt-5 max-w-lg text-center text-sm">
          Baixe o novo app para Windows para fazer chamadas, usar o compartilhamento de tela e ter uma experiência de uso mais rápida.
        </Typography>
        <Button className="hover:bg-[#06cf9db2] bg-[#06cf9c] mt-14 h-8 w-28 rounded-full text-xs  text-black">
          Baixar o app
        </Button>
        <div className="absolute bottom-10 w-full flex items-center gap-x-2 justify-center">
          <Lock sx={{color:"#667781", fontSize:12}}/>
          <Typography className="text-[#667781] font-light text-xs ">
            Suas mensagens pessoais são protegidas com a criptografia de ponta a ponta.
          </Typography>
        </div>
    </main>
  )
}
