import styled from "styled-components";
import { fullName, passwordConverter } from "../../utils/string";
import { User } from "../../api/interfaceUser";

interface UseCardProps { // nes gauname objekte
  user: User;
}


const UserCard = ({ user }: UseCardProps) => {
  return (
    <Container>
      <Email>{user.email}</Email>
      <p>{fullName(user.first_name, user.last_name)}</p>
      <p>{passwordConverter(user.password)}</p>
    </Container>
  )
}

export default UserCard

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Email =styled.p`
  color: blueviolet;
`