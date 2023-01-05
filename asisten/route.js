const express = require ('express')
const router = express.Router()
const asisten = require('./controller')


router.get('/home', function (req, res ) {
    return res.status(200).json({
        status: true,
        message: "OK"
    })
})

//Get All Data Asisten 
router.get('/home/asisten', asisten.getDataAsisten);

//Post Data Asisten
router.post('/home/asisten', asisten.postDataAsisten);

//Get data asisten by id
router.get('/home/asisten/:id', asisten.getDataAsistenById);

//edit data asisten 
router.patch('/home/asisten/:id', asisten.editDataAsisten);

//delete data asisten
router.delete('/home/asisten/:id', asisten.deleteDataAsisten);

module.exports = router;