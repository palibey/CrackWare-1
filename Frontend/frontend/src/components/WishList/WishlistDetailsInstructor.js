import Form from "react-bootstrap/Form";
import Card from "../UI/Card";
import Table from "react-bootstrap/Table";
import classes from "./WishlistDetailsInstructor.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const courses = [
    {
      fullName: "Mathematic",
      id: "MATH230",
      department: "Bilkent University",
      approvedNotApproved: "approved"
    },
    {
      courseName: "Psychology",
      courseCode: "PSYC100",
      hostUniversityName: "Bilkent University",
      approvedNotApproved: "notapproved"
    },
    {
      courseName: "Physics",
      courseCode: "PHYS101",
      hostUniversityName: "Bilkent University",
      approvedNotApproved: "approved"
    },
    {
      courseName: "English",
      courseCode: "ENG401",
      hostUniversityName: "Bilkent University",
      approvedNotApproved: "notapproved"
    },
    {
      courseName: "Humanity",
      courseCode: "HUM112",
      hostUniversityName: "Bilkent University",
      approvedNotApproved: "approved"
    },
  ];

const WishlistDetailsInstructor = () => {
  const [wishlistData, setWishlistData] = useState({});
  const params = useParams();


  useEffect(() => {
    var API = `http://localhost:8080/instructor/wishlists/${params.uid}`;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(API, requestOptions).then((res) => {
        res.json().then((data) => {
            setWishlistData(data);
        });
      }
    );
  }, [params.uid]);

  return (
    <Card>
      <Form className="form">
        <h3 className={classes.heading}>Wishlist</h3>
        <hr />
        <div className={classes.scrollable}>
        <Table>
          <thead>
            <tr key="head">
              <th>Course Name</th>
              <th>Course Code </th>
              <th>University</th>
              <th>Approved/Unapproved</th>
            </tr>
          </thead>
          <tbody>
            {wishlistData.map((course) => (
              <tr key={course.uid}>
                <td>{course.courseName}</td>
                <td>{course.courseCode}</td>
                <td>{course.hostUniversityName}</td>
                <td>{course.approvedNotApproved}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      </Form>
    </Card>
  );
};
export default WishlistDetailsInstructor;