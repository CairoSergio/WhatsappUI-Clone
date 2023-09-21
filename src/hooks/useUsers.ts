import { useEffect, useState } from "react";
import { useFetchAvatars } from "@/hooks/useFetchAvatars";
import { usersData } from "@/data/users";
import { User } from "@/interfaces/user";

export function useUsers() {
  const [data, setData] = useState<User[]>([]);
  const avatars = useFetchAvatars();

  useEffect(() => {
    const multiplied = [...usersData, ...usersData];

    if (avatars.length > 0) {
      const updatedData = multiplied.map((user, i) => ({
        ...user,
        image: avatars[i] || ""
      }));
      setData(updatedData);
    }
  }, [avatars]);

  return data;
}
