import React,{useState,useEffect} from 'react';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([]);

    const getUsers = async () => {
      console.log("getUsers")
        try {
            fetch('http://localhost:3001/users')
                .then(response => response.json())
                .then(data => setUsers(data));
        
        } catch (err) {
          console.error(err.message);
        }
    };
    useEffect(()=>{
        getUsers()
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                <UserCard users={users}/>
            </div>
        </div>
    );
}

export default App;
