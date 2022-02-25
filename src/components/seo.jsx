import * as React from "react";
import SEO from "../seo.json";
import { Helmet } from 'react-helmet-async';

const Seo = () => {
  // If url is set to 'glitch-default', we use the hostname for the current page
  // Otherwise we use the value set in seo.json
  const url = SEO.url === 'glitch-default' ? window.location.hostname : SEO.url
  
  // React Helmet manages the content of the page head such as meta tags
  // We use the async package https://github.com/staylor/react-helmet-async
  return <Helmet>
    <title>{SEO.title}</title>
    <link rel="icon" type="image/x-icon" href="https://cdn.glitch.global/d7674480-73e0-49e0-acd4-3805874f347b/favicon.ico?v=1645800810097"/>
    <meta
      name="description"
      content={SEO.description}
    />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={SEO.title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={url} />
    <meta
      property="og:description"
      content={SEO.description}
    />
    <meta
      property="og:image"
      content={SEO.image}
    />

    <meta name="twitter:card" content="summary" />
  </Helmet>
};

export default Seo;
