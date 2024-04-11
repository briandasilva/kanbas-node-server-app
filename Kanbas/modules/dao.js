import model from "./model.js";
export const createModule = (module) => {
  delete model._id;
  return model.create(module);
};

export const findAllModules = () => model.find();
export const findModulesByCourseId = (courseid) =>
  model.find({ course: courseid });
export const updateModule = (moduleid, module) =>
  model.updateOne({ _id: moduleid }, { $set: module });
export const deleteModule = (moduleid) => model.deleteOne({ _id: moduleid });
