import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";


import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
  } from "reactstrap";

import UserCard from "../user/UserCard";
import Repos from "../user/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Home=()=>
{

  const context=useContext(UserContext);
  const[query,setQuery]=useState("");
  const[user,setUser]=useState(null);



  const fetchDetails=async()=>{
    try{
      const {data}=await Axios.get(`https://api.github.com/users/${query}`);
      console.log(data);
      setUser(data);
    }
    catch(error)
    {
      toast("No able to locate user",{type:"error"});
    }
    

  }


  if(!context.user?.uid)
  {
    return <Redirect to="/signin"/>
  }
  return(
      <div>
          <Container className="App">
          <Row className=" mt-3">
            <Col md="4">
              <InputGroup>
                <Input
                  type="text"
                  value={query}
                  onChange={(e)=>{
                  setQuery(e.target.value);
                  }}
                  placeholder="Please provide the username"
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={fetchDetails} color="primary">Fetch User</Button>
                </InputGroupAddon>
              </InputGroup>
             {user?<UserCard user={user}/>:""}
            </Col>
            <Col md="8">
              {user?<Repos repos_url={user.repos_url}/>:null}
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Home;