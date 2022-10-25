import styled from "styled-components";

const StyledCheckboxes = styled.section`
  display: flex;
  margin-top: 20px;
  p {
    margin-left: 20px;
  }
  .checkbox-off {
    background-color: var(--dark-grey);
    border: 2px solid var(--light-grey);
    width: 20px;
    height: 20px;
  }
  .checkbox-on {
    background-color: var(--green);
    border: none;
    background-image: url("./images/icon-check.svg");
    background-repeat: no-repeat;
    background-position: center;
    width: 20px;
    height: 20px;
  }
`;

export default StyledCheckboxes;
