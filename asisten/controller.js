const express = require('express')
const app = express()
const db = require('../config/database')
const { body, validationResult } = require('express-validator');



const asisten = {
    getDataAsisten(req, res) {
        const sql = "select * from asisten"
        db.query(sql, (err, result) => {
            res.status(201).json({
                status: "OK",
                message: "Successfull get data asisten",
                data: result
            })
        })
    },
    postDataAsisten(req, res) {
        const data = {
            email: req.body.email,
            nama: req.body.nama,
            alamat: req.body.alamat,
            jabatan: req.body.jabatan,
        }
        db.query('INSERT INTO asisten SET ?', data, function (err, rows) {
            if (err) {
                return res.status(500).json({
                    status: false,
                    message: 'internal servel error'
                })
            } else {
                return res.status(201).json({
                    status: true,
                    message: 'Successfully insert data asisten',
                    data: rows[0]
                })
            }
        })
    },

    getDataAsistenById(req, res) {
        const nama = req.params.id;
        db.query(`SELECT * FROM ASISTEN WHERE nama = '${nama}' `, function (err, row) {

            if (err) {
                return res.status(500).json({
                    status: false,
                    message: err
                })
            } if (row.length <= 0) {
                return res.status(404).json({
                    status: false,
                    message: 'data not found'
                })
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'successfull found data asisten',
                    data: row[0]
                })
            }

        })
    },

    editDataAsisten(req, res){
        const nama = req.params.id;
        const data = {
            email: req.body.email,
            nama: req.body.nama,
            alamat: req.body.alamat,
            jabatan: req.body.jabatan,
        }
        db.query(`UPDATE asisten set ? where nama = '${nama}' `, data, function (err, rows) {
            if (err) {
                return res.status(500).json({
                    status: false,
                    message: err
                })
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'successfull updata data asisten',
                    data: rows[0]
                })
            }
        })
    }, 

    deleteDataAsisten(req, res){
        const nama = req.params.id
        db.query(`delete from asisten where nama = '${nama}'`, function(err, row) {
            if(err) {
                return res.status(500).json({
                    status: false,
                    message: err,
                })
            }else {
                return res.status(200).json({
                    status: true,
                    message: 'Successfull delete data asisten'
                })
            }
        })
    }
    

}

module.exports = asisten;