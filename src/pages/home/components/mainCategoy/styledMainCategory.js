import styled from "@emotion/styled";

export const FlexMainCateogry = styled.div`
  --per-item-row: 4;
  --gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto;

  .category_box {
    width: 230px;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &--link {
      text-align: center;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .category_box--img {
      width: 70%;
      margin-bottom: 15px;
    }

    &--title {
      font-size: 1.4rem;
      position: absolute;
      bottom: 0;
    }
  }
`;
