/* eslint-env node */

const Journal = require('./journal-model.js')

const createJournal = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an entry',
        })
    }

    const journal = new Journal(body)

    if (!journal) {
        return res.status(400).json({ success: false, error: err })
    }

    journal
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: journal._id,
                message: 'Entry created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Entry not created!',
            })
        })
}

const updateJournal = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Journal.findOne({ _id: req.params.id }, (err, journal) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Journal not found!',
            })
        }
        journal.title = body.title
        journal.date = body.date
        journal.body = body.body
        journal
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: journal._id,
                    message: 'journal updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'journal not updated!',
                })
            })
    })
}

const deleteJournal = async (req, res) => {
    await Journal.findOneAndDelete({ _id: req.params.id }, (err, journal) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!journal) {
            return res
                .status(404)
                .json({ success: false, error: 'journal not found' })
        }

        return res.status(200).json({ success: true, data: journal })
    }).catch(err => console.log(err))
}


const getJournals = async (req, res) => {
    await Journal.find({}, (err, journals) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!journals.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: journals })
    }).catch(err => console.log(err))
}

module.exports = {
    createJournal,
    updateJournal,
    deleteJournal,
    getJournals,
}