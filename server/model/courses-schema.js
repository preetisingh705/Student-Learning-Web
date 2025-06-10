import mongoose from "mongoose";

const coursesSchema =new mongoose.Schema({
    id:{
            type: String,
            required: true,
            unique: true
        },
        url: String,
        title: Object,
        Heading: String,
        price:Object,
        lecture: Number,
        rating: Number,
        quantity: Number,
        category: String,
        includeds: Object,
        about: String,
        aboutcourses: Object,
        learn: Object,
        topic1: String,
        syllabus1: Object,
        topic2: String,
        syllabus2: Object,
        topic3: String,
        syllabus3: Object,
        why: String,
        box1:Object,
        box2:Object,
        box3:Object,
        box4:Object,
        box5:Object,
    });

    
    const Courses = mongoose.model('courses', coursesSchema);
    
    export default Courses;
