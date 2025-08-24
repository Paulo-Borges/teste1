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

app.post('/membros', async (req, res) => {
    
        await prisma.membros.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                cargo: req.body.cargo
            }
        }) 
        res.status(201).json(req.body)
    
})

app.put('/membros/:id', async (req, res) => {
    
        await prisma.membros.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                email: req.body.email,
                cargo: req.body.cargo
            }
        }) 
        res.status(201).json(req.body)
    
})

app.delete('/membros/:id', async (req, res) => {
    
        await prisma.membros.delete({
            where: {
                id: req.params.id
            },
        }) 
        res.status(200).json({message: "Usuário DELETADO com SUCESSO!"})
    
})

app.listen(PORT, () => {
    console.log('servidor RODANDO!')
})