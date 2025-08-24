import express from 'express'
import cors from 'cors'
import { prismaClient } from '@prisma/client'

const app = express()
const PORT = 3000
const prisma = new prismaClient()

app.use(express.json())
app.use(cors())


app.get('/membros/:id', async (req, res) => {
    let membros = []
    if(req.query) {
        membros.await.prisma.membros.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                cargo: req.query.cargo
            }
        }) 
    } else {
        membros.await.prisma.membros.findMany()
        res.status(200).json(membros)
    }
})

app.listen(PORT, () => {
    console.log('servidor RODANDO!')
})