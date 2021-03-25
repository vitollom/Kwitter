import { useEffect, useState } from "react";
import { userList } from "../fetchRequests";
import { Card } from "react-bootstrap";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userList().then((data) => {
      setUsers(data.users);
    });
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => {
        return <Card>
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>{user.about}</Card.Text>
          </Card.Body>
        </Card>;
      })}
    </div>
  );
}

export default UserList