// (4) Buat Schema Mahasiswa
const mongoose = require('mongoose')

const SSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
    negara: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('S', SSchema)