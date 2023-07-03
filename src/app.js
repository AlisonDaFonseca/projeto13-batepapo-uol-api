import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


const participantes = [];
const mensagens = [];

app.post("/participantes", (req, res) => {
    const { name } = req.body
  
    participantes.push({name})
    console.log(name)
    res.send("ok!")
})

app.post("/mensagens", (req, res) => {
    const { to, text, type } = req.body
    mensagens.push({ to, text, type})
    res.send("ok!")
})

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))