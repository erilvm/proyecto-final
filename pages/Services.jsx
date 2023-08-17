import PageBanner from "@/components/Customs/PageBanner";
import Section from "@/components/Customs/Section";
import DownSide from "@/components/Services/DownSide";
import UpSide from "@/components/Services/Upside";
import React from "react";

const Services = () => {
  return (
    <div>
      <PageBanner
        title="Nuestros servicios"
        path="Servicios"
      />
      <Section>
        <UpSide />
        <DownSide />
      </Section>
    </div>
  );
};

export default Services;
