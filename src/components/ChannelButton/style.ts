import styled from 'styled-components';
import { FaUserPlus, FaCog, FaHashtag } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 8px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    color: var(--senary);
    margin-left: 5px;
  }

  > div svg:not(:first-child) {
    display: none;
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div svg:not(:first-child) {
      display: block;
    }
  }
`;

export const HashtagIcon = styled(FaHashtag)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
`;

export const InviteIcon = styled(FaUserPlus)`
  width: 12px;
  height: 12px;
  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(FaCog)`
  width: 12px;
  height: 12px;
  margin-left: 8px;
  color: var(--symbol);
  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;
