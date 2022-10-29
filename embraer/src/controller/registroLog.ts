import express, { Request, Response } from "express";

const logRouter = express.Router()

logRouter.post('/salvarLog', (req, res)=> {
    res.send('Log salvo com sucesso!')
})

export default logRouter