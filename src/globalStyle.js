import { injectGlobal } from 'styled-components';

injectGlobal`
  * { box-sizing: border-box; }
  a { text-decoration: none; }
  
  html,
  body {
    height: 100%;
    font-family: "Hind", sans-serif;
    font-size: 16px;
  }
`;
