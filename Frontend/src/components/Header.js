import React from 'react'
import {Container,Button} from 'reactstrap';

function Header()
{
    return(
        <div class="my-2 bg-light rounded-3 text-center">
            <div class="text-center rounded-3" style={{backgroundColor:"black",height:170}}>
              <h1 class="display-5" style={{color:"white"}}>Welcome to Course Management Application</h1>
              <p class=" fs-4" style={{color:"white"}}>This is an application where you can add, delete, update the courses available</p>
              <Container className="">
              
              </Container>
            </div>
        </div>
    );
}
export default Header;