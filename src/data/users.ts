import { User } from "@/interfaces/user";

export const usersData: User[] = [
    {
        id:1,
        name: "Cairo",
        status: "online",
        messages:[
            {
                from:1, // significa que a mensagem não é minha é do user com id 1
                message: "Olá, como voce esta?",
                date: "12:30" // ou pode ser sexta-feira por exemplo
            },
            {
                from:2, // significa quea mensagem é minha porque esse id é diferente do id do user "EX: Cairo"
                message: "Oi, Estou bem e voce??",
                date: "16:09", // ou pode ser sexta-feira por exemplo
                viewed: true // pode colocar apenas na ultima menssagem ou seja o ultimo objeto
            },
        ]
    },
    {
        id: 2,
        name: "Sophia",
        status: "offline",
        messages:[
            {
                from: 2, // significa que a mensagem não é minha é do user com id 2
                message: "👋 Oi, como você está?",
                date: "14:12" // ou pode ser quarta-feira, por exemplo
            },
            {
                from: 1, // significa que a mensagem é minha porque esse id é diferente do id do user "EX: Sophia"
                message: "Oi Sophia, estou bem, obrigado! 😊 E você?",
                date: "14:32", // ou pode ser quarta-feira, por exemplo
            },
            {
                from: 2, // significa que a mensagem não é minha é do user com id 2
                message: "Eu também estou bem, obrigada! 👍",
                date: "15:05", // ou pode ser quarta-feira, por exemplo
                viewed: true // pode colocar apenas na última mensagem, ou seja, o último objeto
            },
        ]
    },
    {
        id: 3,
        name: "Luna",
        status: "online",
        messages:[
            {
                from: 3, // significa que a mensagem não é minha é do usuário com id 3
                message: "Olá pessoal! 🌟 Como vocês estão?",
                date: "16:" // ou pode ser quinta-feira, por exemplo
            },
            {
                from: 1, // significa que a mensagem é minha porque esse id é diferente do id do usuário "EX: Luna"
                message: "Oi Luna! Estamos ótimos! 🤩",
                date: "16:", // ou pode ser quinta-feira, por exemplo
            },
            {
                from: 3, // significa que a mensagem não é minha é do usuário com id 3
                message: "Que ótimo ouvir isso! 😃",
                date: "ontem", // ou pode ser quinta-feira, por exemplo
                viewed: false // pode colocar apenas na última mensagem, ou seja, o último objeto
            },
        ]
    },
    {
        id: 4,
        name: "Noah",
        status: "offline",
        messages:[
            {
                from: 4, // significa que a mensagem não é minha é do usuário com id 4
                message: "E aí, pessoal? 😎 Como vai?",
                date: "08:08" // ou pode ser quarta-feira, por exemplo
            },
            {
                from: 2, // significa que a mensagem é minha porque esse id é diferente do id do usuário "EX: Noah"
                message: "Oi Noah! Estamos bem aqui! 👋",
                date: "09:80", // ou pode ser quarta-feira, por exemplo
            },
            {
                from: 4, // significa que a mensagem não é minha é do usuário com id 4
                message: "Que bom saber! 😊",
                date: "09:55", // ou pode ser quarta-feira, por exemplo
                viewed: false // pode colocar apenas na última mensagem, ou seja, o último objeto
            },
        ]
    },
    {
        id: 5,
        name: "Leo",
        status: "online",
        messages:[
            {
                from: 5,
                message: "E aí, galera! Tudo suave? 😎",
                date: "16:12"
            },
            {
                from: 1,
                message: "Fala, Leo! Tranquilidade! ✌️",
                date: "16:19",
            },
            {
                from: 5,
                message: "Tudo na paz, meu! 🤙",
                date: "16:55",
                viewed: true
            },
        ]
    },
    {
        id: 6,
        name: "Mia",
        status: "offline",
        messages:[
            {
                from: 6,
                message: "E aí, gente! Qual é a boa hoje? 🎉",
                date: "08:08"
            },
            {
                from: 2,
                message: "Oi, Mia! Nada demais, só relaxando! 😄",
                date: "08:08",
            },
            {
                from: 6,
                message: "Show! Vamos curtir mais tarde? 🥳",
                date: "07:56",
                viewed: false
            },
        ]
    },
    {
        id: 7,
        name: "Kai",
        status: "online",
        messages:[
            {
                from: 7,
                message: "E aí, meu povo! Tamo junto? 🔥",
                date: "13:54"
            },
            {
                from: 3,
                message: "Kai, sempre na área! 😁",
                date: "18:09",
            },
            {
                from: 7,
                message: "Demorô, bora fazer algo hoje! 🤘",
                date: "19:00",
                viewed: true
            },
        ]
    },
    {
        id: 8,
        name: "Lola",
        status: "online",
        messages: [
          {
            from: 8,
            message: "Oi, pessoal! Alguém a fim de sair hoje à noite? 🌃",
            date: "20:12",
          },
          {
            from: 4,
            message: "E aí, Lola! Eu tô dentro! 🙌",
            date: "21:43",
          },
          {
            from: 8,
            message: "Perfeito! Vamos combinar os detalhes depois. 😄",
            date: "23:11",
            viewed: false,
          },
        ],
      },
      {
        id: 9,
        name: "Zara",
        status: "offline",
        messages: [
          {
            from: 9,
            message: "Hey, pessoal! O que estão fazendo? 😊",
            date: "12:01",
          },
          {
            from: 5,
            message: "Oi, Zara! Estamos só relaxando! 😎",
            date: "12:01",
          },
          {
            from: 9,
            message: "Legal, estou entediada, vamos sair? 🚀",
            date: "12:03",
            viewed: false,
          },
        ],
      },
      {
        id: 10,
        name: "Noah",
        status: "online",
        messages: [
          {
            from: 10,
            message: "E aí, galera! Alguém afim de um jogo online? 🎮",
            date: "11:20",
          },
          {
            from: 7,
            message: "Noah, sempre na jogatina! 🕹️",
            date: "11:29",
          },
          {
            from: 10,
            message: "Vamos lá, Kai! A competição está lançada! 😁",
            date: "ontem",
            viewed: true,
          },
        ],
      },
      {
        id: 11,
        name: "Mila",
        status: "offline",
        messages: [
          {
            from: 11,
            message: "Oi, pessoal! Alguém sabe o que tem de bom hoje? 🤔",
            date: "10:12",
          },
          {
            from: 8,
            message: "Mila, estamos planejando uma saída! Vai se juntar a nós? 🎉",
            date: "10:23",
          },
          {
            from: 11,
            message: "Claro, estou dentro! Vai ser incrível! 😃",
            date: "10:45",
            viewed: false,
          },
        ],
      },
      {
        id: 12,
        name: "Liam",
        status: "online",
        messages: [
          {
            from: 12,
            message: "E aí, pessoal! Alguém quer uma partida de futebol? ⚽",
            date: "09:56",
          },
          {
            from: 9,
            message: "Liam, eu tô nessa! Vai ser divertido! 🥅",
            date: "14:30",
          },
          {
            from: 12,
            message: "Beleza, vamos chamar o pessoal! ⚽",
            date: "15:22",
            viewed: true,
          },
        ],
      },
]