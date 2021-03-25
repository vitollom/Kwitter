import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { useStore, GET_USER } from "../store/store.js";
import { getUser } from "../fetchRequests.js"

import Menu from "../components/Menu.js";
import DisplayUserPicture from "../components/DisplayUserPicture.js"
import UpdateUser from "../components/UpdateUser.js";
import UploadPicture from "../components/UploadPicture"
import UserList from "../components/UserList.js";

import "../assets/Profile.css"


function Profile() {
  const username = useStore((state) => state.user.username)
  const dispatch = useStore((state) => state.dispatch)

  const getUserInfo = () => {
    username && getUser(username)
      .then((userData) =>
        dispatch({ type: GET_USER, payload: userData })
      );
  };

  useEffect(() => {
    getUserInfo()
    return () => getUserInfo()
  }, [])

  return (
    <div>
      <Menu />
      <Container fluid>
        <Row>
          <Col className="profile-left">
            <DisplayUserPicture />
            <UploadPicture getUserInfo={getUserInfo} />
          </Col>
          <Col className="profile-middle" >
            <UpdateUser getUserInfo={getUserInfo} />
            <Link to='/delete-user'>Delete Your Account</Link>
          </Col>
          <Col className="profile-right">
            <UserList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
