import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 65px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 400;
`;

export const Title = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  margin-bottom: 40px;
  font-weight: 400;
`;

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  margin-bottom: 40px;
  font-weight: 400;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
