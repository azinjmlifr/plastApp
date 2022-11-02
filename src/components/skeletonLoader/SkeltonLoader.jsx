import React from "react";
import styled from "@emotion/styled";

const SkeltonContainer = styled.div`
  --background: hsl(0 0% 0% / 0%);
  --surface: hsl(0 0% 0% / 0%);
  --block: hsl(0 0% 0% / 12%);
  --loader: hsl(0 0% 100% / 40%);
  --space: 1rem;

  .skeleton {
    display: grid;
    grid-template: 1fr 1fr / 25% 1fr;
    gap: calc(var(--space) * 0.5);
    width: clamp(200px, 100vmin, 20rem);
    padding: var(--space);
    border: 1px solid hsl(220 3% 15% / 10%);
    border-radius: calc(var(--space) * 0.5);
    background-color: var(--surface);
  }

  .skeleton__block {
    background: linear-gradient(
          -75deg,
          transparent 40%,
          var(--loader),
          transparent 60%
        )
        0 0 / 200% 100%,
      var(--block);
    border-radius: calc(var(--space) * 0.5);
    animation: load 2s infinite linear;
    background-attachment: fixed;
  }

  @keyframes load {
    to {
      background-position: 200% 0;
    }
  }

  .skeleton__block:first-of-type {
    grid-row: 1 / -1;
    aspect-ratio: 1;
  }
`;

const SkeltonLoader = () => {
  return (
    <SkeltonContainer>
      <div className="skeleton">
        <div className="skeleton__block"></div>
        <div className="skeleton__block"></div>
        <div className="skeleton__block"></div>
      </div>
    </SkeltonContainer>
  );
};

export default SkeltonLoader;
