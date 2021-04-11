/* eslint-env node */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Journal = new Schema(
    {
        title: { type: String, required: true },
        date: { type: String, required: true },
        entry: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('journal', Journal)