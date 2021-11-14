const express = require('express')
const Quiz = require('../../models/Quiz')
const Logger = require('colorful-log').default

const quizRouter = express()
const log = new Logger()

quizRouter.get('/', async (req, res) => {
    try {
        const quizzes = await Quiz.find()
        res.status(200).json(quizzes)
    } catch (error) {
        log.error(error)
        res.status(500).json(error)
    }
})

quizRouter.get('/:id', async (req, res) => {
    try {
        const params = req.params
        res.status(200).json(await Quiz.findById(params.id))
    } catch (error) {
        log.error(error)
        res.status(500).json(error)
    }
})

quizRouter.post('/create', async (req, res) => {
    try {
        const { question, answer, difficulty, lang, value } = req.body
        const timestamp = new Date()
        await Quiz.create({
            question,
            answer,
            difficulty,
            value,
            lang,
            createdAt: timestamp,
            changedAt: timestamp
        })
        res.status(200).json({message: 'Quiz successfully created', timestamp})
    } catch (error) {
        res.status(500).json(error)
    }
})

quizRouter.put('/update/:id', async (req, res) => {
    try {
        const params = req.params
        const timestamp = new Date()
        const { question, answer, difficulty, lang, value } = req.body
        const quiz = { question, answer, difficulty, lang, value, updatedAt: timestamp }
        await Quiz.updateOne({_id: params.id}, quiz)
        res.status(200).json({message: 'Quiz successfully updated', updatedAt: timestamp})
    } catch (error) {
        res.status(500).json(error)
    }
})

quizRouter.delete('/:id', async (req, res) => {
    try {
        const params = req.params
        await Quiz.deleteOne({_id: params.id})
        res.status(200).json({message: `Quiz ${params.id} has been deleted.`})
    } catch (error) {
        log.error(error)
        res.status(500).json(error)
    }
})

module.exports = quizRouter