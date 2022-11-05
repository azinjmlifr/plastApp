import styled from "@emotion/styled";

export const FlexFooterContainer = styled.div`
  background-color: #69a8ff;
  .footer_menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0px;
    &--item {
      border-left: solid white 1px;
      width: calc(100% / 5);
      text-align: center;
      color: #dedede;
      font-size: 1.2rem;
      &:last-child {
        border-left: none;
      }
    }
    &--item:hover {
      color: #fff;
    }
  }
  .second-row {
    display: flex;
    justify-content: space-around;
  }
  .second-row-icons-div {
    display: flex;
    color: whitesmoke;
    padding: 20px;
  }
  .second-row-icon {
    font-size: xx-large;
  }
  .second-row-support-div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .second-row-support {
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    border-radius: 20px;
    padding: 9px;
    height: 70%;
    text-align: center;
  }

  .second-row-icon-headphone {
    font-size: xx-large;
    color: whitesmoke;
    text-align: center;
  }
  .second-row-imgs-div {
    display: flex;
    gap: 10px;
  }
  .second-row-img {
    aspect-ratio: 1/1;
    width: 80px;
    border-radius: 10px;
  }
  .third-row-title {
    padding: 30px;
    color: whitesmoke;
    text-align: center;
  }
`;
