import styled from "styled-components";

export const ElementBarArea = styled.div`
  width: 25%;
  height: 9.5rem;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  background: #111a;
  border: 1px solid #fff;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  bottom: 0;
  transition: 0.5s height;
  overflow: hidden;
  gap: 1rem;
  color: #ccc;
  &:hover {
    height: 100%;
    overflow: auto;
    background: #000e;
  }
  @media screen and (max-width: 1080px) {
    width: 75%;
    bottom: -3.5rem;
    &:hover {
      height: calc(100% + 3.5rem);
    }
  }
`;

export const IndexElement = styled.div`
  width: 9rem;
  height: 9rem;
  border: 1px solid #fff;
  border-radius: 12px;
  position: relative;
  top: 0.25rem;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  @media screen and (max-width: 1080px) {
  }
`;

export const IndexAtomicNumber = styled.div`
  width: 3rem;
  height: 3rem;
  background: #000a;
  color: #fff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 3rem;
  right: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const IndexSymbol = styled.div`
  width: 8rem;
  height: 2rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
`;
export const IndexElectronicConfig = styled.div`
  width: 3rem;
  height: 9rem;
  background: #000a;
  color: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  left: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const InlineData = styled.span`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
`;

export const OutLineData = styled.span`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: auto;
`;
