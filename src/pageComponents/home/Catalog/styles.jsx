import styled from 'styled-components';

export const CatalogWrapper = styled.section`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
`;

export const CatalogTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CatalogTitleNav = styled.nav`
  display: flex;
  gap: 32px;
`;

export const CatalogTitleButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffffff;
`;

export const CatalogItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 50px 0;


  @media(max-width: 1200px) {
    align-items: center;
    justify-content: center;
  }
`;

export const CatalogButton = styled.button`
  height: 48px;
  width: 100%;
  background-color: #E6E6E6;
  border: none;
  cursor: pointer;
  transition: 500ms;

  :hover {
    background-color: #F8F8F8;
  }

  :active {
    background-color: #9C9C9C;
  }
`;