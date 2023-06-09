import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 20px;
  font-weight: normal;
  background: #303030;
  padding: 1.5rem 2rem 1.5rem 1rem;
  user-select: none;
  align-items: center;
  width: 100%;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  font-size: 24px;
  font-weight: normal;
  line-height: normal;
  background-color: #303030;
  padding: 0 2rem 0 1rem;
  white-space: pre-wrap;
  user-select: none;
  transition: all 0.25s;
  max-height: 0;
  overflow: hidden;
  visibility: collapse;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: left;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
