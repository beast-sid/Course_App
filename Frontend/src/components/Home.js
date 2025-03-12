import React from 'react';
import {Container,Button} from 'reactstrap';
const Home=()=>{
    return(
        
        <div class=" mb-1 bg-light rounded-3 text-center">
            <div class="text-center rounded-3" style={{backgroundColor:"silver",height:500}}>
              <h1 class="display-5" style={{color:"black"}}>Manage Your Courses in few clicks</h1>
              <p class=" fs-4" style={{color:"black"}}>This is an application where you can add, delete, update the courses available</p>
              <Container className="">
              <Button color="success">LinkedIn</Button>
              </Container>
            </div>
        </div>
         
        
    )
}
export default Home;

 


