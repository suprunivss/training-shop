import styled from 'styled-components';

export const CatalogWrapper = styled.section`
  margin-top: 96px;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    margin-top: 50px;
  }
`;

export const CatalogTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const CatalogTitleNav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 992px) {
    display: none;
  }
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

  @media (max-width: 1200px) {
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