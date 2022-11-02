import styled from "@emotion/styled";

export const FlexMainNoticeBanner = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 20px;
  .banner {
    flex-basis: 50%;
    overflow: hidden;
    &--img {
      object-fit: cover;
    }
  }
`;
