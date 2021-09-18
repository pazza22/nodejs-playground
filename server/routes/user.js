var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
let uri = process.env.MONGO_CONNECT

router.get('/getusers', function (req, res, next) {

    MongoClient.connect(uri, function (err, client) {
        if (err) throw err

        var db = client.db('Playground')

        db.collection('Users').find().toArray(function (err, result) {
            let users = "Users: ";

            if (err) throw err

            if (result.length > 0) {
                result.forEach((user) => {
                    users += `${user.username} `;
                })
            } else {
                users = "No Users Found!";
            }
            res.send(users);
        })
    })
});

module.exports = router;