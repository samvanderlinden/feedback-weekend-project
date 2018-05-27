const router = require('express').Router();

const pool = require('../pool');


//POST
router.post('/', (req, res) => {
    const newComment = (req.body)
    console.log('adding new comment', newComment);
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`, [newComment.feeling, newComment.understanding, newComment.support, newComment.comments])
        .then((results) => {
            console.log('this is newComment', newComment);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error with postgres POST', error);
            res.sendStatus(500);
        })
})

//GET
router.get('/', (req, res) => {
    let queryText = `SELECT "feeling", "understanding", "support", "comments" FROM "feedback";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
        console.log('sending comments result.rows', result.rows)
    })
    .catch((error) => {
        console.log('error on GET', error);
        res.sendStatus(500);
    })
})

// //DELETE
// router.delete('/', (req, res) => {
//     const movie = req.query;
//     console.log('console logging deleted movie object', movie);
//     console.log('deleting movie with id', movie.id);
//     pool.query(`DELETE FROM "movies"
//                 WHERE "id" = ($1);`, [movie.id])
//         .then((results) => {
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             res.sendStatus(500);
//             console.log('error with postgres movie DELETE', error);
//         })
// })



module.exports = router;