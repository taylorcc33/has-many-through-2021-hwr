import React from "react";
import useAxiosOnMount from "../customHooks/useAxiosOnMount";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

const MyCourses = () => {
  const { data, loading, error } = useAxiosOnMount("/api/courses");

  const renderEnrollmentData = (enrollmentData) => {
    return enrollmentData.map((e) => {
      return (
        <>
          <p>{e.student_name}</p>
        </>
      );
    });
  };

  const renderCourses = () => {
    return data.enrollments.map((c) => {
      return (
        <>
          <h2>{c.course.name}</h2>
          {renderEnrollmentData(c.course_enrollments)}
          <hr></hr>
        </>
      );
    });
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  return <>{renderCourses()}</>;
};

export default MyCourses;

// User is like a university admin or something
// Students have many Courses through Enrollments

// MyCourses page will show all courses and students registered for them

// Courses index - get all courses with enrollments and student names
