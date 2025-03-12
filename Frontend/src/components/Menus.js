import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup}from 'reactstrap';

const Menus=()=>{
    return(

        <ListGroup style={{height:500}}>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>
                View Courses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>
                Add Course
            </Link>
        </ListGroup>

    )
}
export default Menus;