import styled from "styled-components";

export const RefBarArea = styled.div`
  width: 100%;
  height: 2rem;
  background: #111;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
`;

export const UList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 1.2rem;
  overflow-x: auto;
  font-size: 1.4rem;
  @media screen and (max-width: 1080px) {
    justify-content: flex-start;
    font-size: 0.9rem;
  }

  & > li {
    display: flex;
    width: fit-content;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
  }
  & > li:nth-child(1) {
    color: #f59;
  }
  & > li:nth-child(2) {
    color: #50a;
  }
  & > li:nth-child(3) {
    color: #12f;
  }
  & > li:nth-child(4) {
    color: #5af;
  }
  & > li:nth-child(5) {
    color: #a02;
  }
  & > li:nth-child(6) {
    color: #295;
  }
  & > li:nth-child(7) {
    color: #a5a;
  }
  & > li:nth-child(8) {
    color: #f54;
  }
  & > li:nth-child(9) {
    color: #fa5;
  }
  & > li:nth-child(10) {
    color: #f5f;
  }
  & > li:nth-child(11) {
    color: #446;
  }
`;
