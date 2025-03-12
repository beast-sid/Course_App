import React,{useState} from 'react';
import {Form,FormGroup,Input,Button,Container} from 'reactstrap';
import axios from 'axios';
import {toast} from 'react-toastify';

const AddCourse=()=>{

    const [course,setCourse]=useState();

    //resetting the form fields after add button is clicked
    const resetFields=()=>{
       document.getElementById("form").reset();
    }

    //form handler function
    const handleForm=(e)=>{
       console.log(course);
       postDataToServer(course);
      //e.preventDefault();
    };

    //creating function to post data to server
    const postDataToServer=(course)=>{
       axios.post(`courses`,course).then(
        (response)=>{
              console.log(response);
              toast.success("Course is successfully added");
              resetFields();
        },
        (error)=>{
           console.log(error);
           toast.error("Something went wrong, please try again after sometime");
        }
       )
    }
    
    
    return(

      <div>
        <h1 className="text-center">Fill Course Details</h1>
        <Form id="form">
          <FormGroup>
            <label>Course ID</label>
            <Input type="text" placeholder="Enter Course ID" name="userId" id="userId"
              onInput={(e)=>{
                setCourse({...course,id:e.target.value})//adding input values to course id
              }}/>
          </FormGroup>
          <FormGroup>
            <label>Title</label>
            <Input type="text" placeholder="Enter Title here" name="title" id="title"
            onInput={(e)=>{
              setCourse({...course,title:e.target.value})
            }}/>
          </FormGroup>
          <FormGroup>
            <label>Description</label>
            <Input type="textarea" placeholder="Enter Course's Description" name="description" id="description" style={{height:150}}
            onInput={(e)=>{
              setCourse({...course,description:e.target.value})
            }}/>
          </FormGroup>
        </Form>
        <Container className="text-center">
        <Button color="primary" onClick={handleForm}>Add Course</Button>
        <Button type="submit" color="success mx-2" onClick={resetFields}>Clear</Button>
        </Container>
      </div>



    )
}
export default AddCourse;