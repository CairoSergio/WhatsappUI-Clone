import { Message } from "./message";

export interface User {
    id: number;
    image?: string
    name: string;
    status: "online" | "offline";
    messages: Message[];
}
  