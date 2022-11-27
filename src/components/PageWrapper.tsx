import Footer from "@/components/FooterSection/Footer";
import NavBar from "@/components/NavBarSection/NarBar";
import { ContentWrapper, PageContainer } from "@/pages";
import Header from "../layouts/Header";

interface IPageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper = ({ children }: IPageWrapperProps): JSX.Element => {
    return (
        <PageContainer>
            <Header />
            <NavBar />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
        </PageContainer>
    );
};

export default PageWrapper;
