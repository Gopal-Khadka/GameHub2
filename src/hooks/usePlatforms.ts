import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

let endpoint = "/platforms/lists/parents";
const usePlatforms = () => {
  return useData<Platform>(endpoint);
};

export default usePlatforms;
