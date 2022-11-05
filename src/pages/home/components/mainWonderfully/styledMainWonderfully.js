import styled from "@emotion/styled";

export const FlexMainBanner = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 50px;
  gap: 180px;
  justify-content: space-between;
  align-items: center;

  .basketImg {
    aspect-ratio: 1 / 1;
    width: 60px;
  }
  .wonderImg {
    aspect-ratio: 16 / 10;
    width: 160px;
    hight: 50px;
  }
  .discountDiv {
    background-color: #3ead07;
    border-radius: 20px;
    font-size: 10px;

    &--discountTitle {
      color: #fcfcfc;
      padding: 15px;
    }
  }

  .goToProducts {
    background-color: white;
    border-radius: 20px;

    &--title {
      color: #3ead07;
      padding: 15px;
      &--arrow {
        width: 10px;
      }
    }
  }
`;
