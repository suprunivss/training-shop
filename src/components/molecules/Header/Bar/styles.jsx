import styled from 'styled-components';
import { ContainerStyled } from '../../../atoms/Container/styles';

export const BarWrapper = styled.div`
  background: #000000;
  width: 100%;
  color: #ffffff;
`
export const Container = styled(ContainerStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`


