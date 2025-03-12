import React, { useState } from 'react';
import {Card,CardBody,CardSubtitle,CardText,Button,Container} from 'reactstrap';
import myImage from './myImage.jpg';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';



const Course=({course,deleteprop})=>{

    


    
  //calling server to delete course on clicking delete button
  const deleteCourse=(id)=>{
      axios.delete(`courses/${id}`).then(
        (response)=>{
            console.log(response);
            toast.success("Course has been deleted successfully");
            deleteprop(course.id);
        },
        (error)=>{
            console.log(error);
            toast.error("Something went wrong, please try again after sometime");
        }
      );
  }


  return(
      <Card className="text-center">
         <Container><img alt="Card cap" src={myImage} width="20%"/></Container>
        <CardBody>
            <CardSubtitle tag="h5">
                {course.title}
            </CardSubtitle>
            <CardText>
                {course.description}
            </CardText>
            <Container>
            <Link tag="a" to="/update-course" action state={{id:course.id,title:course.title,description:course.description}}>
                <Button color="success">Update</Button>
                </Link>
                <Button color="danger mx-2" onClick={()=>{deleteCourse(course.id)}}>Delete</Button>
            </Container>
        </CardBody>
       
      </Card>
  )
}


              


export default Course;
