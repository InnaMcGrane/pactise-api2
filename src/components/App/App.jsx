import { useEffect, useState } from "react";
import UsersList from "../UsersList/UsersList";
import SelectedUsersList from "../selectedUsersList/SelectedUsersList";

function App() {
  // 100 000
  const [users, setUsers] = useState([]);
  // 2
  const [selectedUsers, setSelectedUsers] = useState([])

  // [
  //   {
  //     id: 2353,
  //     name: 'e65ur76r5',
  //     selected: false
  //   },
  //   {
  //     id: 54,
  //     name: '6y654s54',
  //     selected: false
  //   }
  // ]
  
  const multiUserHandler = (id) => {
    // поняять какую операцию надо делать (добавление в selectedUsers или удаление)
    const foundUserInSelected = selectedUsers.find((user) => user.id === id)
    
    if (foundUserInSelected) {
      setSelectedUsers(selectedUsers.filter((user) => user.id !== id));
    } else {
      const foundUser = users.find((user) => user.id === id)
      setSelectedUsers([...selectedUsers, foundUser]);
    }
  }

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, [])
  
  return <>
  <div className="container"><SelectedUsersList selectedUsers={selectedUsers}/></div>
  <div className="container">
    {users && <UsersList users={users} multiUserHandler={multiUserHandler} />}
  </div>
  </>
}
export default App
