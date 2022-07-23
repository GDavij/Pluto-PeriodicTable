import styled from "styled-components";

export const TableArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background: linear-gradient(180deg, #111, #151515);
  margin-bottom: 10rem;
  padding: 0.5rem;
  padding-top: 1rem;
  overflow: auto;
  gap: 0.5rem;
`;

export const TableLine = styled.div`
  width: 114.8rem;
  height: 6rem;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1080px) {
    width: 91.4rem;
    height: 4.7rem;
  }
`;

export const Block = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  gap: 0.4rem;
`;

export const ElementGradient = styled.button`
  height: 6rem;
  width: 6rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  border: 2px solid #eee;
  border-radius: 5px;

  @media screen and (max-width: 1080px) {
    width: 4.7rem;
    height: 4.7rem;
  }
`;

export const Element = styled.button`
  height: 6rem;
  width: 6rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  border: 2px solid #eee;
  border-radius: 5px;
  transition: 0.2s border;
  @media screen and (max-width: 1080px) {
    width: 4.7rem;
    height: 4.7rem;
  }
  &:hover {
    border: 2px solid #957;
  }
`;

export const AtomicNumber = styled.div`
  height: 1rem;
  width: 4rem;
  display: flex;
  bottom: 2rem;
  right: 0;
  position: relative;
  //background: #000a;
  color: #cfc;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  //border: 1px solid #eee;
  border-radius: 100px;
  font-size: 0.9rem;

  @media screen and (max-width: 1080px) {
    height: 1rem;
    width: 3rem;
    font-size: 0.7rem;
    bottom: 1.5rem;
  }
`;
export const Symbol = styled.div`
  height: 0rem;
  width: 0rem;
  display: flex;
  bottom: 0.5rem;
  position: relative;
  color: #fff;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 1.3rem;
`;

export const Name = styled.div`
  height: 0rem;
  width: 0rem;
  display: flex;
  bottom: -1.4rem;
  position: relative;
  color: #cfc;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 0.85rem;
  @media screen and (max-width: 1080px) {
    font-size: 0.6rem;
    bottom: -1rem;
  }
`;
