import Footer from "@/components/FooterSection/Footer";
import NavBar from "@/components/NavBarSection/NarBar";
import { ContentWrapper, PageContainer } from "@/pages";
// import { AdContainerLeft, AdContainerRight } from "./Advertisement";
// import Image from "next/image";

interface IPageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper = ({ children }: IPageWrapperProps): JSX.Element => {
    return (
        <PageContainer>
            {/* <AdContainerLeft>
                <Image src="/ad_left_200.png" width={200} height={250}></Image>
            </AdContainerLeft>
            <AdContainerRight>
                <Image src="/ad_left_200.png" width={200} height={250}></Image>
            </AdContainerRight> */}
            <NavBar />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
        </PageContainer>
    );
};

export default PageWrapper;
