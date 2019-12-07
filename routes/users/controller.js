const { connection } = require("../../config");

module.exports = {
    getAll: (req, res) => {
        connection.query(`Select * from odo`, (error, result, fields) => {
            if (error) {
                res.status(500).send({message: "there is somethhing error"}
                );
            } else {
                res.status(200).send({
                    message: "Show all datas",
                    data: result
                });
            }
        });
    },
    
    addOne: (req, res) => {
        connection.query(
            `INSERT INTO todo SET ?`,
            req.body,
            (error, results, fields) => {
            if (error) {
                res.status(500).send({ message: "there is something"}
                );
            } else {
                res.status(200).send({ 
                    message: "Add one data",
                    data: results
                });
            }
        });
    },
    updateOne: (req, res) => {
        connection.query(
            `UPDATE todo SET todo = ? WHERE id = ?`,
            [`${req.body.todo}`, `${req.params.id}`],
            (error, results, fields) => {
            if (error) {
                res.status(500).send({ message: "there is something"}
                );
            } else {
                res.status(200).send({ 
                    message: "Update one data",
                    data: results
                });
            }
        });
    },
    
    deleteOne: (req, res) => {
        connection.query(
            `DELETE todo SET todo = ? WHERE id = ?`,
            [req.params.id],
            (error, results, fields) => {
            if (error) {
                console.log(error);
                
                res.status(500).send({ message: "there is something"}
                );
            } else {
                res.status(200).send({ 
                    message: "Delete one data",
                    data: results
                });
            }
        });
    }    
};