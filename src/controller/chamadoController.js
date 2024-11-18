import { chamandoChamada, chamandoChamadaPorNome, inserirChamada, alterarChamada, deletarChamada } from "../repository/chamadoRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.get("/chamada", async (req, resp) => {
    try {
        const chamada = await chamandoChamada();
        resp.status(200).send(chamada);
    } catch (err) {
        resp.status(500).send({ erro:  err.message });
    }
});

endpoint.get("/chamada/:titulo", async (req, resp) => {
    try {
        const titulo = req.params.titulo;
        const chamada = await chamandoChamadaPorNome(titulo)
          resp.status(200).send(chamada)
           
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

endpoint.post("/chamada", async (req, resp) => {
    try {
        const novaChamada = req.body;
        await inserirChamada(novaChamada)
       
         resp.status(201).send({ mensagem: "Chamada criada com sucesso" })
                 
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

endpoint.put("/chamada/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        const alteracao = req.body;

        await alterarChamada(alteracao, id)
             resp.status(200).send({ mensagem: "Chamada deletada com sucesso" })
            
        
    } catch (err) {
        resp.status(500).send({ erro:  err.message });
    }
});

endpoint.delete("/chamada/:id", async (req, resp) => {
    try {
        const id = req.params.id;

        await deletarChamada(id)
            resp.status(200).send({ mensagem: "Chamada deletada com sucesso" })
                    
            
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

export default endpoint;
