import { css } from '@emotion/react';

const resetStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  blockquote,
  button,
  dd,
  figure,
  form,
  p,
  pre {
    padding: 0;
  }

  button,
  input,
  select,
  textarea {
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    border: 0;
    clip: rect(0 0 0 0);
  }
`;

export default resetStyles;
