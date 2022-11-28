import { useRouter } from "next/router";
import { createMoviePost } from "@/utils/axiosPostApi";


const usePostIdForMovieId=()=>{
    const router = useRouter();

    const createMoviePostByResourceId = async (resourceId: number): Promise<void> => {
        try {
            const res = await createMoviePost(resourceId);
            const { _id } = res.data;
            router.push(`/movies/${_id}`);
        } catch (e: any) {
            return e;
        }
    };

    return createMoviePostByResourceId
}

export default usePostIdForMovieId