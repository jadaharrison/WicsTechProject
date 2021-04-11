/* eslint-env node */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))











// const express = require('express'); 
// const app = express(); 
// const bodyParser = require('body-parser'); 
// const cors = require('cors'); 
// const mongoose = require('mongoose'); 
// const journalRoutes = express.Router(); 
// const PORT = process.env.PORT || 4000; 
// const url = 'mongodb://127.0.0.1:27017/wicstechproj';

// let Journal = require('./journal-model'); 
// // All the above is used to import these libraries & framework in our file. / 
// app.use(cors()); 
// app.use(bodyParser.json()); 
// //used to tell the system that we want to JSON

// mongoose.connect(url, { 
//     useNewUrlParser: true 
// }); 

// // const db = mongoose.connection
// // db.once('open', url => {
// //   console.log('Database connected:', url)
// // });

// // db.on('error', err => {
// //   console.error('connection error:', err)
// // });

// const connection = mongoose.connection; 
// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// });

// // Here we creating a connection between our database and node/express server
// journalRoutes.route('/').get(function(req, res) {
//     Journal.find(function(err, journals) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(journals);
//         }
//     });
// }); 

// // Code above is used to access the todo list data in json format
// journalRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     Journal.findById(id, function(err, journal) {
//     res.json(journal);
//     });
// }); 

// // URL parameter id which can be accessed via req.params.id. 
// //This id is passed into the call of Tood.findById to retrieve an issue item based on it’s ID.
// journalRoutes.route('/update/:id').post(function(req, res) {
//     Journal.findById(req.params.id, function(err, journal) {
//         if (!journal)
//             res.status(404).send("data is not found");
//         else
//             journal.title = req.body.title;
//             journal.date = req.body.date;
//             journal.body = req.body.body;
//             journal.save().then(/*journal => {*/
//                 res.json('Journal updated!')//;
//             //}
//             )
//             .catch(/*err => {*/
//                 res.status(400).send("Update not possible")//;
//             //}
//             );
//     });
// });
// //Code above is used to update the using if there is any present data

// journalRoutes.route('/add').post(function(req, res) {  
//     let journal = new Journal(req.body);
//     journal.save()
//         .then(/*journal => {*/
//             res.status(200).json({'journal': 'journal added successfully'})
//         //}
//         )
//        .catch(/*err => {*/
//         res.status(400).send('adding new journal failed')
//     //}
//     );
// }); 

// //with this post request using the above, you will be able to add a new item in your todo list 
// app.use('/journal', journalRoutes); app.listen(PORT, function() {
//     console.log("Server is running on Port: " + PORT);
// });

  


