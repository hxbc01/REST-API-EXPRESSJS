const express = require('express')
const app = express()
const PORT = 8080
const router = require('./asisten/route')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.use(router);

// app.get('/asisten', (req, res) => {
//     const sql = "select * from asisten"
//     db.query(sql, (err, result) => {
//         res.status(201).json({
//             status: "OK",
//             message: "Successfull get data asisten",
//             data: result
//         })
//     })
// })

// app.post('/asisten', [
//     //validation 

//     body('email').notEmpty(),
//     body('nama').notEmpty(),
//     body('alamat').notEmpty(),
//     body('jabatan').notEmpty()
// ],
//     (req, res) => {

//         const error = validationResult(req);

//         if (!error.isEmpty()) {
//             return res.status(422).json({
//                 errors: error.array()
//             });
//         }

//         const data = {
//             email: req.body.email,
//             nama: req.body.nama,
//             alamat: req.body.alamat,
//             jabatan: req.body.jabatan,
//         }
//         db.query('INSERT INTO asisten SET ?', data, function (err, rows) {
//             if (err) {
//                 return res.status(500).json({
//                     status: false,
//                     message: 'internal servel error'
//                 })
//             } else {
//                 return res.status(201).json({
//                     status: true,
//                     message: 'Successfully insert data asisten',
//                     data: rows[0]
//                 })
//             }
//         })
//     })

// app.get('/asisten/:id', function (req, res) {

//     const nama = req.params.id;

//     db.query(`SELECT * FROM ASISTEN WHERE nama = '${nama}' `, function (err, row) {

//         if (err) {
//             return res.status(500).json({
//                 status: false,
//                 message: err
//             })
//         } if (row.length <= 0) {
//             return res.status(404).json({
//                 status: false,
//                 message: 'data not found'
//             })
//         } else {
//             return res.status(200).json({
//                 status: true,
//                 message: 'successfull found data asisten',
//                 data: row[0]
//             })
//         }

//     })
// })

// app.patch('/asisten/:id', [

//     //validation
//     body('email').notEmpty(),
//     body('nama').notEmpty(),
//     body('alamat').notEmpty(),
//     body('jabatan').notEmpty()

// ], (req, res) => {
//     const error = validationResult(req);

//     if (!error.isEmpty()) {
//         return res.status(422).json({
//             status: false,
//             message: error.array()
//         })
//     }

//     const nama = req.params.id;

//     const data = {
//         email: req.body.email,
//         nama: req.body.nama,
//         alamat: req.body.alamat,
//         jabatan: req.body.jabatan,
//     }

//     db.query(`UPDATE asisten set ? where nama = '${nama}' `, data, function (err, rows) {
//         if (err) {
//             return res.status(500).json({
//                 status: false,
//                 message: err
//             })
//         } else {
//             return res.status(200).json({
//                 status: true,
//                 message: 'successfull updata data asisten',
//                 data: rows[0]
//             })
//         }
//     })

// })

// app.delete('/asisten/:id', function(req, res) {
//     const nama = req.params.id

//     db.query(`delete from asisten where nama = '${nama}'`, function(err, row) {
//         if(err) {
//             return res.status(500).json({
//                 status: false,
//                 message: err,
//             })
//         }else {
//             return res.status(200).json({
//                 status: true,
//                 message: 'Successfull delete data asisten'
//             })
//         }
//     })
// })


//check if program is ok or not
app.get('/', (req, res) => {
    res.status(200).json({
        message: "OK"
    })
})


app.listen(
    PORT,
    () => console.log(`api-service is alive on http://localhost:${PORT}`)
)





