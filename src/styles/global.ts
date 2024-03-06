import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body,
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
body {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding:0;
}
a {
  text-decoration: none;
}
body {
  background-color: #f8f9fa;
}
body,
p {
  color: #333;
}
`;

export default Global;
