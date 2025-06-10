

import { courses } from "./constants/data.js";
import Courses from "./model/courses-schema.js";

const DefaultData = async() => {
    try{
       await Courses.insertMany(courses);
        console.log('Data imported Successfully')
    }catch(error){
        console.log('Error while inserting default data', error.message);
    }
    
}

export default DefaultData;