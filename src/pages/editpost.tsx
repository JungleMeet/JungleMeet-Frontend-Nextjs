import PostEditor from "@/components/NewPostEditor/PostEditor";
import PageWrapper from "@/components/PageWrapper";
import RequireAuth from "@/components/RequireAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IgetStaticProps {
    locale: string;
}
export async function getStaticProps({ locale }: IgetStaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["home"])),
        },
    };
}

const EditPost = () => {
    return (
        <PageWrapper>
            <RequireAuth>
                <PostEditor type="updatePost" />
            </RequireAuth>
        </PageWrapper>
    );
};

export default EditPost;
