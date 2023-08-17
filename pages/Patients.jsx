import PageBanner from "@/components/Customs/PageBanner";
import React from "react";
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Section from "@/components/Customs/Section";
import DownLeftSide from "@/components/Patients/DownLeftSide";
import DownRightSide from "@/components/Patients/DownRightSide";


export const getServerSideProps = withPageAuthRequired();
const Index = () => {
    return (
        <>
            <PageBanner
                title="Pacientes"
                path="Pacientes"
            />
        <Section>
        <div className="flex flex-wrap">
          <DownLeftSide />
        </div>
      </Section>
        </>
    );
};

export default Index;
