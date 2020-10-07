var notesdb = require("./db/db.json");

//accesses file methods
const fs = require("fs");
const router = require("express").Router();


      module.exports = function(app) {
      //GET request for API notes route 
      router.get("/api/notes", function(req, res) {
        res.json(notesdb);
    });


      // POST API route to receive new note and save on the request body to be added to the db.json file and returns new note to client  
      //New note
      router.post("/notes", function (req, res) {
        let newNote = req.body;
        console.log(req.body);
        notes.push(newNote);

        
      //Adds note to db.json and returns note to client 
        fs.writeFile("./db/db.json",JSON.stringify(notesdb), function(){
            res.json(notesdb);
          console.log("Note Sent Successfully!");
          res.end();
        });
        
      });

        //DELETE Request
router.delete("/api/notes/:id", function(req, res){
    let noteID = req.params.id
// Attempting to delete selected note from array and to give unique ID to each note
    for (let i = 0; i < notesdb.length; i++) {
      if (notesdb[i].id === parseInt(id)){
        notesdb.splice(i,1)
      }
    }
    //Notes returned to client 
    fs.writeFile("./db/db.json", JSON.stringify(notesdb), function (){
      res.json(notesdb)
    })
})
module.exports = router;}
