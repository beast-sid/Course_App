import React,{useState,useEffect} from 'react'
import Course from './Course';
import base_url from './../api/bootapi';
import axios from "axios";
import { toast } from 'react-toastify';

   const Allcourses=()=>{

    const [courses,setCourses]=useState();

    
    //function to call server:
    const getAllCoursesFromServer=()=>{
        axios.get(`courses`).then(
            (response)=>{
                //success
                //console.log(response.data);
                toast.success("Courses has been loaded");
                setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("Oops something went wrong.Please try again agter sometime");
            }
        );
    };
    //calling getAllCoursesFromServer on component load
    useEffect(()=>{
        getAllCoursesFromServer();
          
    },[]);

    //removing the course from screen after course is deleted, we are getting the course id from course component and we are passing this method as prop to course component
    const deleteCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }



    return(
        
        <>
        
        <h1 className="text-center">View All Courses</h1>
         {
            //passing deleteCourse method as deleteprop
            courses!=null?courses.map((item)=><Course key={item.id} course={item} deleteprop={deleteCourse}/>):"No course available"
         }

        
         </>
    )
}
export default Allcourses;