import { useEffect, useState } from "react";
import UsersList from "../UsersList/UsersList";
import SelectedUsersList from "../selectedUsersList/SelectedUsersList";
import Search from "../Search/Search";
import Header from "../Header/Header";

function App() {
  // 100 000
  const [users, setUsers] = useState([]);
  // 2
  const [selectedUsers, setSelectedUsers] = useState([])
  const [searchText, setSearchText] = useState("")

  console.log('searchText', searchText);
  
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

  const getFilteredUsersByName = () => {
    if (searchText.length === 0) {
      return users
    }

    return users.filter((user) => {
      const userFullName = `${user.firstName} ${user.lastName}`.toLowerCase()

      if (userFullName.includes(searchText.toLowerCase())) {
        return true
      }
      return false
    })
  }
  
  return (
    <>
    <Header/>
      <div className="container">
        <Search setSearchText={setSearchText} searchText={searchText} />
      </div>
      <div className="container">
        <SelectedUsersList selectedUsers={selectedUsers} multiUserHandler={multiUserHandler} />
      </div>
      <div className="container">{users && <UsersList users={getFilteredUsersByName()} multiUserHandler={multiUserHandler} selectedUsers={selectedUsers} />}</div>
    </>
  );
}
export default App
