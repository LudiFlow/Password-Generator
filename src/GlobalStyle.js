import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

:root {
  --dark-grey: #24232C;
  --medium-grey: #817D92;
  --light-grey: #E6E5EA;
  --black: #18171F;
  --green: #A4FFAF;
  --red: #F64A4A;
  --orange: #FB7C58;
  --yellow: #F8CD65;
}

html, body {
  height: 100%;
  margin-top: 1rem;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

body {
  background-color: var(--black);
}

#root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading {
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
}

main {
  width: 90%;
  max-width: 540px;
  margin: 0px 30px 0px 30px;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.row-2 {
  display: flex;
  align-items: center;
}

.row-2>div {
  margin-left: 20px;
}

h1, h2, p, button, label, input, textarea {
  font-family: 'JetBrains Mono', monospace;
}

p, label, input, textarea, button {
  line-height: 1em;
  font-size: 18px;
}

.font-color-white {
  color: var(--light-grey);
}

.font-color-grey {
  color: var(--medium-grey);
}

.font-color-green {
  color: var(--green);
}

.font-uppercase {
  text-transform: uppercase;
}

.card-background-dark-grey {
  background-color: var(--dark-grey);
}

.card-background-darker-grey {
  margin-top: 20px;
  padding: 20px;
  background-color: var(--black);
}

.card-top {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-bottom {
  margin-top: 20px;
  padding: 20px;
}

.button {
  background-color: var(--green);
  color: var(--dark-grey);
  border: 1px solid var(--green);
  padding: 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.button:hover {
  background-color: var(--dark-grey);
  border: 1px solid var(--green);
  color: var(--green);
}

.tippy-box[data-theme~='grey'] {
  background-color: var(--light-grey);
  color: var(--medium-grey);
  font-family: 'JetBrains Mono', monospace;
}

.passwordBar-red {
  background-color: var(--red);
}

.passwordBar-orange {
  background-color: var(--orange);
}

.passwordBar-yellow {
  background-color: var(--yellow);
}

.passwordBar-green {
  background-color: var(--green);
}

#copy-icon {
  cursor: pointer;
  margin-left: 10px;
}

#password {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

input[type="range"] {
  accent-color: var(--green);
}

input[type="range"]:active {
  accent-color: var(--green);
}

@media only screen and (max-width: 415px) {
  #password {
    font-size: 1.5rem;
  }
}

@media only screen and (min-width: 460px) {
  body {
    overflow: hidden;
  }
}

@media only screen and (max-width: 460px) {
  .mob-stack {
    display: flex;
    flex-direction: column;
  }

  .mob-stack>* {
    padding: 10px;
    margin-top: 10px;
  }
}
`;
