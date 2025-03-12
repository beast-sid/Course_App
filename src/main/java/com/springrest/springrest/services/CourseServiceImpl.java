package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
    private CourseDao courseDao;
	
	
    
	public CourseServiceImpl()
	{
		
	}

	@Override
	public List<Course> getCourses() {
		
		return courseDao.findAll();  
	}
	
	@Override
	public Course getCourse(Long id)
	{
		 return courseDao.getReferenceById(id);
	}

	@Override
	public Course addCourse(Course course) {
		
		  courseDao.save(course);
		  return course;
	}

	@Override
	public void deleteCourse(Long id) {
		//list=this.list.stream().filter(e->e.getId()!=id).collect(Collectors.toList());
		Course entity=courseDao.getReferenceById(id);
		courseDao.delete(entity);
		
	}

	@Override
	public Course updateCourse(Course course) {
		courseDao.save(course);//this function will override the new course with previous course if it's already present
		return null;
	}

}
