import { useEffect, useState } from "react";
import { useGithubAvatars } from "@/hooks/useGitHubAvatars";
import { usersData } from "@/data/users";
import { User } from "@/interfaces/user";

export function useUsers() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
      const multiplied = [...usersData, ...usersData];
      
      async function FetchAvatars() {
        const { images } = await useGithubAvatars(multiplied.length);

        if (images) {
            const updatedData = multiplied.map((user, i) => ({
            ...user,
            image: images[i]?.avatar_url || ""
            }));
            setData(updatedData);
        }
    }

    if (multiplied.length > 0) {
      FetchAvatars();
    }
  }, []);

  return data;
}
