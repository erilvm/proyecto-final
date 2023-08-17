import PageBanner from "@/components/Customs/PageBanner";
import React from "react";
import { withPageAuthRequired } from '@auth0/nextjs-auth0'


export const getServerSideProps = withPageAuthRequired();
const Index = () => {
    return (
        <>
            <PageBanner
                title="Perfil"
                path="Perfil"
            />

        </>
    );
};

export default Index;
