import { useRouter } from "next/router";


const router=useRouter()
const createMoviePostByResourceId = async (resourceId: number): Promise<void> => {
    try {
        const res = await createMoviePost(resourceId);
        const { _id } = res.data;
        router.push(`/movies/${_id}`);
    } catch (e:any) {
        return e;
    }
};

export default createMoviePostByResourceId;