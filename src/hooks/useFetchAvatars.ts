import { useEffect, useState } from "react";
import { useGithubAvatars } from "@/hooks/useGitHubAvatars";
import { usersData } from "@/data/users";
import { User } from "@/interfaces/user";

export function useFetchAvatars() {
  const [avatars, setAvatars] = useState<string[]>([]);
  
  useEffect(() => {
    async function fetchAvatars() {
      const multiplied = [...usersData, ...usersData];
      const { images } = await useGithubAvatars(multiplied.length);

      if (images) {
        setAvatars(images);
      }
    }

    if (avatars.length === 0) {
      fetchAvatars();
    }
  }, [avatars]);

  return avatars;
}
