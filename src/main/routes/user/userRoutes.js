const express = require('express')
const User = require('../../models/User')

const userRouter = express()

userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

userRouter.get('/:id', async (req, res) => {
    try {
        const params = req.params
        res.status(200).json(await User.findById(params.id))
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

userRouter.post('/create', async (req, res) => {
    try {
        const { username, name, lastName, email, password } = req.body
        const timestamp = new Date()
        await User.create({
            username,
            name,
            lastName,
            password,
            email,
            createdAt: timestamp,
            changedAt: timestamp
        })
        res.status(200).json({message: 'User successfully created', timestamp})
    } catch (error) {
        res.status(500).json(error)
    }
})

userRouter.put('/update/:id', async (req, res) => {
    try {
        const params = req.params
        const timestamp = new Date()
        const { username, name, lastName, email, password } = req.body
        const user = { username, name, lastName, email, password, updatedAt: timestamp }
        await User.updateOne({_id: params.id}, user)
        res.status(200).json({message: 'User successfully updated', updatedAt: timestamp})
    } catch (error) {
        res.status(500).json(error)
    }
})

userRouter.delete('/:id', async (req, res) => {
    try {
        const params = req.params
        await User.deleteOne({_id: params.id})
        res.status(200).json({message: `User ${params.id} has been deleted.`})
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

module.exports = userRouter