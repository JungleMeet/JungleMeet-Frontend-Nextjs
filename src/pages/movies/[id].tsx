import { useRouter } from "next/router";
import Footer from "@/components/FooterSection/Footer";
import NavBar from "@/components/NavBarSection/NarBar";
import React from "react";

const MoviePage = (): JSX.Element => {
    const router = useRouter();
    const id = router.query.id as string;
    return (
        <>
            <NavBar />
            {id}
            <Footer />
        </>
    );
};

export default MoviePage;
