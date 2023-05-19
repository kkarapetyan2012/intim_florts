import React from "react";
import { Helmet } from "react-helmet";

const site = {
    title: '',
    description: '',
    location: ''
}

const MetaComponent = () => {
    const { href } = typeof site.location !== "undefined" ? site.location : { href: "" };
    return (
        <Helmet titleTemplate={`%s - ${site.title || site.siteMetadata.title}`}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={site.description || site.siteMetadata.description}
      />
      <link
        rel="image_src"
        type="image/webp"
        href="https://i.ibb.co/7GmRJrk/favicon.png"
      />
      <title>{site.title}</title>

      <meta property="og:title" content={site.title} key="ogtitle" />
      <meta property="og:description" content={site.description} key="ogdesc" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/7GmRJrk/favicon.png"
      />
      {href && <meta property="og:url" content={href} />}

      <meta name="twitter:title" content={site.title} />
      <meta
        name="twitter:description"
        content={site.description || site.siteMetadata.description}
      />
      <meta
        name="twitter:site_name"
        content={site.title || site.siteMetadata.title}
      />
      <meta
        name="twitter:image"
        content="https://i.ibb.co/7GmRJrk/favicon.png"
      />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
    </Helmet>
    );
};

export default MetaComponent;