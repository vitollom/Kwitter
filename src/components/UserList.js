import { useEffect, useState } from "react";
import { userList } from "../fetchRequests";
import { Card } from "react-bootstrap";
import NoPicture from "../assets/Pictures/unknown_user_image.png"

function UserList() {
  const baseURL = "https://socialapp-api.herokuapp.com";
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
        return <Card className="kwitter-user-card" key={user.username}>
          <Card.Body className="kwitter-users-left">
            {
              user.pictureLocation ?
                <Card.Img className="users-list-picture" src={baseURL + user.pictureLocation}></Card.Img>
                :
                <Card.Img className="users-list-picture" src={NoPicture}></Card.Img>
            }
            </Card.Body>
          <Card.Body className="kwitter-users-right">
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>{user.about}</Card.Text>
          </Card.Body>
        </Card>;
      })}
    </div>
  );
}

export default UserList