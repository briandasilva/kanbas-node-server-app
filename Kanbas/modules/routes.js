import * as dao from "./dao.js";
import db from "../Database/index.js";
function ModuleRoutes(app) {
  const getModulesForCourse = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCourseId(cid);
    res.send(modules);
  };
  app.get("/api/courses/:cid/modules", getModulesForCourse);

  const createNewModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    await dao.createModule(newModule);
    res.send(newModule);
  };
  app.post("/api/courses/:cid/modules", createNewModule);

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(200);
  };
  app.delete("/api/modules/:mid", deleteModule);

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    await dao.updateModule(mid, module);
    res.sendStatus(204);
  };
  app.put("/api/modules/:mid", updateModule);
}
export default ModuleRoutes;
