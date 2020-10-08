const { Workout } = require("../models")
const db = require("../models")

module.exports = function(app) {
  app.get("/api/workouts", async function (req, res){
    res.json(await db.Workout.find());
  })

  app.get("/api/workouts/range", async function (req, res){
    res.json(await db.Workout.find().limit(7));
  })

  app.post("/api/workouts", async function (req, res){
    res.json(await db.Workout.create(req.body));
  })
  
  app.put("/api/workouts/:id", async function (req, res){
    res.json(
      await db.Workout.findByIdAndUpdate(req.params.id, {
        $push: { exercises: req.body},
      })
      )
    })
}