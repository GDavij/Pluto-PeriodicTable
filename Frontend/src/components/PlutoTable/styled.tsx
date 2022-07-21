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
  background: linear-gradient(45deg, #1115, #111);
  margin-bottom: 10rem;
  padding: 0.5rem;
  padding-top: 1rem;
  overflow: auto;
  gap: 0.5rem;
`;

export const TableLine = styled.div`
  width: 116.5rem;
  height: 6rem;
  color: #fff;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Block = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  gap: 0.5rem;
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
  color: #fff;
  transition: 0.2s border;
  &:hover {
    border: 2px solid #957;
  }
`;

export const AtomicNumber = styled.div`
  height: 1rem;
  width: 4rem;
  display: flex;
  bottom: 1.6rem;
  right: 0;
  position: relative;
  background: #000a;
  color: #fff;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 100px;
  font-size: 0.8rem;

  @media screen and (max-width: 1080px) {
    height: 1rem;
    width: 3rem;
    font-size: 0.6rem;
    bottom: 1.1rem;
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
  font-size: 0.8rem;

  @media screen and (max-width: 1080px) {
    height: 1rem;
    width: 3rem;
    font-size: 0.7rem;
  }
`;

export const Name = styled.div`
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
  font-size: 0.8rem;

  @media screen and (max-width: 1080px) {
    height: 1rem;
    width: 3rem;
    font-size: 0.7rem;
  }
`;
