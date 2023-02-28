import styled from "styled-components";
import { User } from "../../types/user";
import { getFullName, hidePassword } from "../../utils/string";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Container>
      <Email>{user.email}</Email>
      <p>{getFullName(user.first_name, user.last_name)}</p>
      <p>{hidePassword(user.password)}</p>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  gap: 16px;
`;

const Email = styled.p`
  color: #4267b2;
  font-weight: 500;
`;
