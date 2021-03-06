import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import "./all.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='google-site-verification'
          content='XB1A7RHFoccOTpcV2iD9_6_k5_Elgz6YX0zTRBI3WQE'
        />

        <link
          rel='eivind-hope-logo'
          sizes='180x180'
          href={`${withPrefix("/")}img/logo-png.png`}
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix("/")}img/logo-png.png`}
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href={`${withPrefix("/")}img/logo-png.png`}
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href={`${withPrefix("/")}img/logo-png.png`}
          color='#ff4400'
        />
        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta
          property='og:image'
          content={`${withPrefix("/")}img/logo-png.png`}
        />
      </Helmet>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
