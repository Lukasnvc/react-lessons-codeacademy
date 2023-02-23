import { useUsers } from "../../hooks/user";
import styled from "styled-components";
import UserCard from "./UserCard";
import { User } from "../../api/interfaceUser";


const Users = () => {
  const { data } = useUsers();
  
  const users = data || [];
console.log(users)
  return (
    <Container>
      {users && users.map((user:User) => (
        <UserCard key={user.id} user={user}/>
      ))}
     
    </Container>
  )
}

export default Users

const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
`