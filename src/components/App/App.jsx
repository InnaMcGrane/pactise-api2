import { useEffect, useState } from "react";
import UsersList from "../UsersList/UsersList";

function App() {
  const [ users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, [])
  
  
  return users && <UsersList users={users}/>
}
export default App
