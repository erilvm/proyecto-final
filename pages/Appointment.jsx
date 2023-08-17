import React from "react";

import PageBanner from "@/components/Customs/PageBanner";
import Section from "@/components/Customs/Section";
import DownLeftSide from "@/components/Appointment/DownLeftSide";
import DownRightSide from "@/components/Appointment/DownRightSide";
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export const getServerSideProps = withPageAuthRequired();

const Index = () => {
  return (
    <div>
      <PageBanner
        title="Citas"
        path="Citas"
      />
      <Section>
        <div className="flex flex-wrap">
          <DownLeftSide />
          <DownRightSide />
        </div>
      </Section>
    </div>
  );
};

export default Index;
