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
    <div className="kwitter-user-list">
      <h1 className="kwitter-new-users">Kwitter's Newest Users!</h1>
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