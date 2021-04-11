/* eslint-env node */


const express = require('express');
const router = express.Router();
const JournalCtrl = require('./journal-ctrl')

router.post('/journal', JournalCtrl.createJournal)
router.put('/journal/:id', JournalCtrl.updateJournal)
router.delete('/journal/:id', JournalCtrl.deleteJournal)
router.get('/journals', JournalCtrl.getJournals)

module.exports = router