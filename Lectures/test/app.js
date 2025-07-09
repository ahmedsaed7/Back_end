const express = require('express');
const app = express();
const port =  process.env.PORT || 5000;
// app.get('/', (req, res) => {
//     res.send('Hello World! and welcom to express')
// });
app.get('/', (req, res) => {
    res.send("This is data in Home Page");
});
// // Ab

// // About route
app.get("/about", (req, res) => {
    res.send("This is data in about Page");
});

// Service route
app.get("/service", (req, res) => {
    res.send("This is data in SERVICE PAGE");
});

// Team route with HTML
app.get("/team", (req, res) => {
    res.send("<h2>Islam Mohamed</h2><button>Send</button>");
});


// Data1 route with JSON
app.get("/data1", (req, res) => {
    res.send({
        name: "ahmed",
        age: 20,
        city: "Cairo"
    });
});

app.get("/data2", (req, res) => {
    res.send({
        name: "Islam",
        age: 26,
        city: "Mansoura"
    });
});
// path.join(__dirname, '../test/public');

app.use(express.json());

// POST route to create a user
app.post("/users", (req, res) => {
    const user = req.body;
    res.send({
        message: "User created successfully",
        user: user
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
