import styled from 'styled-components';
import { FaMicrophone, FaHeadphonesAlt, FaCog } from 'react-icons/fa';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: var(--quaternary);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(FaMicrophone)`
  width: 17px;
  height: 17px;
  color: var(--white);
  opacity: .7;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(FaHeadphonesAlt)`
  width: 17px;
  height: 17px;
  color: var(--white);
  opacity: .7;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(FaCog)`
  width: 17px;
  height: 17px;
  color: var(--white);
  opacity: .7;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;

