const express = require('express');
const cors = require ('cors');


const app = express();

app.use(cors());
//Sample Users data for testing Dynamic route 
const users = ['Asad', 'Jafar', 'Iqbal', 'Moin', 'Parvin', 'Shabnoor', 'Mithila'];


//Get root route
app.get('/', (req, res)=> {
    const fruit = {
        product: 'Orange',
        price: 220
    }

    res.send (fruit);
});


// dynamic route for localhost:3000/users/:id
// Use of req.params tells us what request parameter is sent to server >> req.params.id
// req.query gives the query sent to server 
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
})

// parse body json
app.use(express.json());

// Post route
app.post ('/addUser', (req, res)=> {
    //Save to database, for now do this
    const user = req.body;
    user.id = 55;
    res.send(user);
})




app.listen(3000, () => console.log('Listening to port 3000'));