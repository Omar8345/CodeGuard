import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "../theme/index";
import SEO from "components/seo";
import Layout from "../components/layout";

import Banner from "sections/banner";
import Services from "sections/services";

import VideoOne from "sections/video-one";
import CallToAction from "sections/call-to-action";
import BoostAgencies from "sections/boost-agencies";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="CodeGuard" />
          <Banner />
          <Services />
          <BoostAgencies />
          <VideoOne />

          <CallToAction />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
