const express = require("express");
const {
  addPeople,
  getPerson,
  personfavoriteFoods,
  updatePersonId,
  updatePersonName,
  deletePersonId,
  deletePeopleName,
  peopleFood,
  addPerson,
} = require("../controllers/person.controllers");
const router = express.Router();

//people (add)
router.post("/", addPeople);

//person with id
router.get("/:_id", getPerson);

//person with his favorite food
router.get("/:personfavoriteFoods", personfavoriteFoods);

//person id (update)
router.put("/:_id", updatePersonId);

//person name (update)
router.put("/:name", updatePersonName);

//person delete (id)
router.delete("/:_id", deletePersonId);

//person delete (name)
router.delete("/:name", deletePeopleName);

module.exports = router;
