import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors())


app.get('/membros', (req, res) => {

})

app.listen(PORT, () => {
    console.log('servidor RODANDO!')
})