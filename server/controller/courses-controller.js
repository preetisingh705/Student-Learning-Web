

import Courses from "../model/courses-schema.js";

export const getProducts = async(request, response) => {
  try {
    const courses = await Courses.find({});

        response.status(200).json(courses);
    
  } catch(error)  {
    response.status(500).json({message: error.message})
  }
}

export const getProductById = async(request, response) => {
  try {
    const id = request.params.id;
    const courses = await Courses.findOne({ 'id': id})

    response.status(200).json(courses);
  }catch (error){
    response.status(500).json({message: error.message})
  }
}













