async function fetchGithubAvatars(amount: number) {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=location:Mozambique+followers:>0&sort=followers&order=desc&per_page=${amount}`);
      const imagedata = await response.json();
      return imagedata;
    } catch (error) {
      throw error;
    }
  }
  
export async function useGithubAvatars(users: number) {
  try {
    const imagesData = await fetchGithubAvatars(users);
    return { images: imagesData.items };
  } catch (error: any) {
    return {
      error: error.message, 
    };
  }
}
  