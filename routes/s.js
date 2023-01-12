// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const S = require('../models/S')

// import varifyToken
// const verifyToken = require('../config/verifyToken')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const sPost = new S({
        nama: req.body.nama,
        negara: req.body.negara
    })

    try {
        // simpan data 
        const s = await sPost.save()
        // response
        res.json(s)
    } catch (error) {
        res.json({message: error})
    }
})

// Read (method GET)
router.get('/', async(req, res) => {
    try {
        const s = await S.find()
        res.json(s)
    } catch (error) {
        res.json({
            message:error
        })
    }
    
})

// Update (method PUT)
router.put('/:sId', async(req, res) => {
    // tampung data yang mau di ubah
    const data = {
        nama: req.body.nama,
        negara: req.body.negara
    }

    try {
        // update data disini
        const s = await S.updateOne({_id: req.params.sId}, data)
        // response success
        res.json(s)
    } catch (error) {
        res.json({message: error
        })
    }
})

// Delete (method Delete)
router.delete('/:sId', async(req, res) => {
    try {
        // delete data disini
        const s = await S.deleteOne({_id: req.params.sId})
        // response success
        res.json(s)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router