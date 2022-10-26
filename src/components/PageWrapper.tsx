import Footer from "@/components/FooterSection/Footer";
import NavBar from "@/components/NavBarSection/NarBar";
import { PageContainer } from "@/pages";

interface IPageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper = ({ children }: IPageWrapperProps): JSX.Element => {
    return (
        <>
            <NavBar />
            <PageContainer>{children}</PageContainer>
            <Footer />
        </>
    );
};

export default PageWrapper;
