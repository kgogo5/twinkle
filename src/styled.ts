import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-Thin.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-Thin.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-Thin.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-Thin.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-Thin.ttf') format('truetype');
	font-style: normal;
	font-weight: 100;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-ThinItalic.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-ThinItalic.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-ThinItalic.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-ThinItalic.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-ThinItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: 100;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-ExtraLight.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-ExtraLight.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraLight.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraLight.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraLight.ttf') format('truetype');
	font-style: normal;
	font-weight: 200;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-ExtraLightItalic.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraLightItalic.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraLightItalic.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraLightItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: 200;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-Light.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-Light.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-Light.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-Light.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-Light.ttf') format('truetype');
	font-style: normal;
	font-weight: 300;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-LightItalic.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-LightItalic.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-LightItalic.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-LightItalic.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-LightItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: 300;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-Regular.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-Regular.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-Regular.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-Regular.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-Regular.ttf') format('truetype');
	font-style: normal;
	font-weight: 400;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-Italic.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-Italic.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-Italic.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-Italic.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-Italic.ttf') format('truetype');
	font-style: italic;
	font-weight: 400;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-Medium.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-Medium.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-Medium.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-Medium.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-Medium.ttf') format('truetype');
	font-style: normal;
	font-weight: 500;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-MediumItalic.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-MediumItalic.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-MediumItalic.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-MediumItalic.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-MediumItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: 500;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-SemiBold.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-SemiBold.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-SemiBold.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-SemiBold.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-SemiBold.ttf') format('truetype');
	font-style: normal;
	font-weight: 600;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-SemiBoldItalic.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-SemiBoldItalic.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-SemiBoldItalic.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-SemiBoldItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: 600;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-Bold.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-Bold.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-Bold.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-Bold.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-Bold.ttf') format('truetype');
	font-style: normal;
	font-weight: 700;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-BoldItalic.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-BoldItalic.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-BoldItalic.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-BoldItalic.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-BoldItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: 700;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-ExtraBold.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-ExtraBold.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraBold.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraBold.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraBold.ttf') format('truetype');
	font-style: normal;
	font-weight: 800;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-ExtraBoldItalic.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraBoldItalic.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraBoldItalic.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-ExtraBoldItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: 800;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-Black.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-Black.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-Black.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-Black.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-Black.ttf') format('truetype');
	font-style: normal;
	font-weight: 900;
}
@font-face {
	font-family: 'Saira Condensed';
	src: url('fonts/SairaCondensed/SairaCondensed-BlackItalic.eot');
	src: url('fonts/SairaCondensed/SairaCondensed-BlackItalic.eot?#iefix') format('embedded-opentype'),
		 url('fonts/SairaCondensed/SairaCondensed-BlackItalic.woff2') format('woff2'),
		 url('fonts/SairaCondensed/SairaCondensed-BlackItalic.woff') format('woff'),
		 url('fonts/SairaCondensed/SairaCondensed-BlackItalic.ttf') format('truetype');
	font-style: italic;
	font-weight: 900;
}
* {
    box-sizing: border-box;
}
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: "Saira Condensed", sans-serif;
        font-weight: 400;
        font-style: normal;
    };
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    };
    body {
        padding: 0;
        margin: 0;
        line-height: 1;
        color:#fff;
    };
    ol, ul {
        list-style: none;
    };
    blockquote, q {
        quotes: none;
    };
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    };
    table {
        border-collapse: collapse;
        border-spacing: 0;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    hr{
      margin:0;
      border: none;
      border-bottom: 1px solid rgba(63,63,63,0.16);
    }
    #root {
      overflow-y: auto;
    }
`;

export default GlobalStyle;
