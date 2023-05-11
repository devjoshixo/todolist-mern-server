const Tasks = require('../Models/tasks');

module.exports.displayTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.send(tasks);
  } catch (e) {
    res.status(404).json({ errorMessage: 'Error occured while finding tasks' });
  }
};

module.exports.addTask = async (req, res) => {
  try {
    const newTask = new Tasks({ ...req.body });
    await newTask.save();
    res.status(200).json('Done');
  } catch (e) {
    console.log('done');
  }
};

module.exports.toggleCheck = async (req, res) => {
  try {
    const { id } = await req.body;
    const SelectedTask = await Tasks.findOne({ _id: id });
    await Tasks.findOneAndUpdate(
      { _id: id },
      { checked: !SelectedTask.checked },
      { new: true }
    );
    res.status(200).json({ message: 'Successfully Done' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'bad request' });
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const seltask = await req.body;
    await Tasks.findOneAndRemove({ _id: seltask.id });
    res.status(200).json('Done');
  } catch (e) {
    console.log(e);
  }
};
