import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.2);
  z-index: 2;

  padding: 0 11px 0 16px;

  background-color: var(--secondary);
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ExpandIcon = styled(FaChevronDown)`
  width: 12px;
  height: 12px;
  color: #fff;

  cursor: pointer;
`;
