import React,{useEffect,useState} from 'react';
import {Form,FormGroup,Input,Button,Container} from 'reactstrap';
import {useLocation} from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';


const UpdateCourse=()=>{
       const location=useLocation();

       const [updatecourse,setupdateCourse]=React.useState({id:location.state.id,title:location.state.title,description:location.state.description})

       const resetFields=()=>{
        document.getElementById("form").reset();
     }

     
      //calling server to update course
      const callupdateendpoint=(updatecourse)=>{
        axios.put(`courses`,updatecourse).then((response)=>{
          toast.success("Course is successfully updated");
          console.log(response);
          setupdateCourse({id:"",title:"",description:""});
          resetFields();
          
        },(error)=>{
          toast.error("Something went wrong, please try again after sometime");
          console.log(error);
        });
      }

    return(
        <div>
        <h1 className="text-center">Update Course Details</h1>
        <Form id="form">
          <FormGroup>
            <label>Course ID</label>
            {/*course id will not change, hence this field is diabled */}
            <Input type="text"  disabled placeholder="Enter Course ID" name="userId" id="userId" value={updatecourse.id}/>
          </FormGroup>
          <FormGroup>
            <label>Title</label>
            <Input type="text" placeholder="Enter Title here" name="title" id="title" value={updatecourse.title}
             onInput={(e)=>{
              setupdateCourse({...updatecourse,title:e.target.value})
            }}/>
          </FormGroup>
          <FormGroup>
            <label>Description</label>
            <Input type="textarea" placeholder="Enter Course's Description" name="description" id="description" style={{height:150}} value={updatecourse.description}
            onInput={(e)=>{
              setupdateCourse({...updatecourse,description:e.target.value})
            }}/>
          </FormGroup>
        </Form>
        <Container className="text-center">
        <Button color="primary" onClick={()=>{callupdateendpoint(updatecourse)}}>Update Course</Button>
        
        </Container>
      </div>
    )
}
export default UpdateCourse;