import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Edgar Alcover Jr. - Software Developer Portfolio",
  description = "Professional Software Developer from Cebu, Philippines. Specializing in PHP, React, Backend Development and Web Development. View my portfolio, projects, and get in touch for freelance work.",
  keywords = "Edgar Alcover Jr, Software Developer, Web Developer, Portfolio, PHP Developer, React Developer, Software Developer, Cebu Philippines, Freelance Developer, Full Stack Developer, Edgar, Alcover, Github Pages, Github Portfolio, Github Projects",
  url = "https://aigooooo.github.io/Portfolio/",
  image = "https://aigooooo.github.io/Portfolio/logo512.png",
  type = "website"
}) => {
  const siteTitle = "Edgar Alcover Jr. - Software Developer Portfolio";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO; 