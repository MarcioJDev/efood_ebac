import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{
    --bg: #fff6f2;
    --muted: #fdece6;
    --accent: #e65a53;
    --card-border: #f3c9c3;
    --text: #5a2d2d;
    --soft: #ffe9df;
  }
  *{ box-sizing: border-box; }
  html,body,#root{ height:100%; }
  body{ margin:0; font-family: 'Inter', 'Arial', Helvetica, sans-serif; background:var(--bg); color:var(--text); -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale }
  a{ color:inherit; text-decoration:none }
  h1,h2,h3,h4,h5{ color:var(--accent); }
  button{ font-family:inherit }
  .container{ max-width:1100px; margin:0 auto; padding:0 18px }
`

export default GlobalStyle
