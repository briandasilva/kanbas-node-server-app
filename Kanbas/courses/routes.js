import Database from "../Database/index.js";
import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  const getAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  };
  app.get("/api/courses", getAllCourses);

  const createCourse = async (req, res) => {
    const course = { ...req.body, _id: new Date().getTime().toString() };
    await dao.createCourse(course);
    res.send(course);
  };
  app.post("/api/courses", createCourse);

  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    await dao.deleteCourse(id);
    res.sendStatus(204);
  };
  app.delete("/api/courses/:id", deleteCourse);

  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    await dao.updateCourse(id, course);
    res.sendStatus(204);
  };
  app.put("/api/courses/:id", updateCourse);

  const getCourseById = async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  };
  app.get("/api/courses/:id", getCourseById);
}
