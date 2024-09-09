const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a user
app.post("/user", async (req, res) => {
    try {
        const { first_name, last_name, role } = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (first_name, last_name, role) VALUES($1, $2, $3) RETURNING *",
            [first_name, last_name, role]
        );
        res.json(newUser.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});

// get all users
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query(
            "SELECT * FROM users"
        );
        res.json(allUsers.rows);
    } catch (error) {
        console.log(error.message);
    }
});

// get a single user
app.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        );
        res.json(user.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});

// update a user
app.put("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, role } = req.body;
        await pool.query(
            "UPDATE users SET first_name = $1, last_name = $2, role = $3 WHERE id = $4",
            [first_name, last_name, role, id]
        );
        res.json("User was updated.");
    } catch (error) {
        console.log(error.message);
    }
});

// delete a user
app.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(
            "DELETE FROM users WHERE id = $1",
            [id]
        );
        res.json("User was deleted.");
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(8001, () => console.log("Server started on port 8001."));
