import { useEffect, useState } from "react";
import UsersList from "../UsersList/UsersList";

function App() {
  const [ users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, [])
  
  
  return <div className="container">
    {
      users && <UsersList users={users}/>
    }
  </div>
}
export default App
