const Person = require("../models/Person");

// add new person
exports.addPerson = async (req, res) => {
  try {
    const newPerson = new Person({ ...req.body });
    await newPerson.save();
    res.send({ msg: "adding person success", newPerson });
  } catch (err) {
    res.status(400).send({ msg: "person not saved", err });
  }
};

//add people
exports.addPeople = async (req, res) => {
  try {
    const newPeople = Person.create({ ...req.body });
    await newPeople.save();
    res.send({ msg: "adding People success", newPeople });
  } catch (err) {
    res.status(400).send({ msg: "People not saved", err });
  }
};

//find people
exports.getPeople = async (req, res) => {
  try {
    const personslist = await Person.find();
    res.send({ personslist, msg: "find all people" });
  } catch (error) {
    res.status(400).send({ msg: "can not get people", error });
  }
};

// find person with his favorite Foods
exports.personfavoriteFoods = async (req, res) => {
  try {
    const { favoriteFoods } = req.params;
    const findPerson = await Person.findOne({ favoriteFoods: [favoriteFoods] });
    res.send({ msg: "found the person with his favorite foods ", findPerson });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "can not found the person with his favorite foods" });
  }
};

// find one person with his id
exports.getPerson = async (req, res) => {
  try {
    const { _id } = req.params;
    const getPerson = await Person.findById({ _id });
    res.send({ msg: "person founded", getPerson });
  } catch (error) {
    res.status(400).send({ msg: "person not found" });
  }
};

//update person
exports.updatePersonId = async (req, res) => {
  try {
    const { _id } = req.params;
    await Person.updateOne({ _id }, { $set: { ...req.body } });
    res.send({ msg: "person updated" });
  } catch (err) {
    res.status(400).send({ msg: "can not update", err });
  }
};

//find and update person with his name
exports.updatePersonName = async (req, res) => {
  try {
    const { name } = req.params;
    await Person.findOneAndUpdate({ name }, { $set: { ...req.body } });
    res.send({ msg: "person updated" });
  } catch (err) {
    res.status(400).send({ msg: "can not update", err });
  }
};

//delete person throw his id
exports.deletePersonId = async (req, res) => {
  try {
    const { _id } = req.params;
    let result = await Person.findByIdAndRemove({ _id });
    res.send({ msg: "deleted succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete" });
  }
};

//delete all people via name
exports.deletePeopleName = async (req, res) => {
  try {
    const { name } = req.params;
    const preple = await Person.deleteMany({ name });
    res.send({ msg: "deleted succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete" });
  }
};

//Find people who like burritos
exports.peopleFood = async (req, res) => {
  try {
    const { favoriteFoods } = req.params;
    const burritos = await Person.find({
      favoriteFoods: "burritos",
    })
      .sort({ name: "asc" })
      .limit(2)
      .select("-age")
      .exec(error, data);
    res.send({ msg: "found the people who like burritos", peopleFood });
  } catch (error) {
    res.status(400).send({ msg: "can not found the people who like burritos" });
  }
};
