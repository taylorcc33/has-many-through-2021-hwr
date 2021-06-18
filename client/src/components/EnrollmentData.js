import React from "react";

const EnrollmentData = ({ data, courseId }) => {
  const renderEnrollmentData = () => {
    
  }

  return (
    <>
      <p>Enrollment Data</p>
      {renderEnrollmentData()}
    </>
  );
};

export default EnrollmentData;

// User is like a university admin or something
// Students have many Courses through Enrollments

// MyCourses page will show all courses and students registered for them

// Courses index - get all courses with enrollments and student names

// if courseId == data.enrollments.map
