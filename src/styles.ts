import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  src: local("Open Sans Light"), local("OpenSans-Light"),
    url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTXhCUOGz7vYGh680lGh-uXM.woff)
      format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: local("Open Sans"), local("OpenSans"),
    url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff)
      format("woff");
}

@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  src: local("Open Sans Semibold"), local("OpenSans-Semibold"),
    url(https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNSnhCUOGz7vYGh680lGh-uXM.woff)
      format("woff");
}

:root {
  /* Font */
  /* ----------------------------------------- */
  font-family: "Open Sans";

  /* Color */
  /* ----------------------------------------- */

  --white: #fff;
  --background: #101010;

  --grey: #888888; /* Navbar */
  --grey-dark: #606060; /* Loading & Not Found Text */

  --blue: #4097fe; /* Border */
  --blue-dark: #376ee5; /* Exclusives */

  /* padding */
  /* margin */
  /* line-height */
  /* font-size */
  /* ----------------------------------------- */

  --t: 0.2rem;
  --xxs: 0.4rem;
  --xs: 0.8rem;
  --s: 1.2rem;
  --m: 1.4rem;
  --d: 1.6rem;
  --e: 1.8rem;
  --l: 2rem;
  --xl: 2.4rem;
  --xxl: 2.8rem;
  --xxxl: 3.2rem;
  --p40: 4rem;
  --p50: 5rem;
  --p80: 8rem;
  --p120: 12rem;

  /* font-weight */
  /* ----------------------------------------- */

  --thin: 100;
  --light: 300;
  --default: 400;
  --medium: 500;
  --semibold: 600;
  --bold: 700;

  /* Layout */
  /* ----------------------------------------- */
  --carousel-item-min-width: 20.7rem;
  --carousel-item-min-height: 30.7rem;
  --max-content-width: 120rem


}

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background-color: var(--background);
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--green-darkest);
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
span,
ul,
li {
  margin: 0;
  padding: 0;
  letter-spacing: 1px;
  color: var(--white);
  font-size: var(--d);
}

ul {
  list-style-type: none;
}

.space {
  height: 400px;
}

a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
`;
