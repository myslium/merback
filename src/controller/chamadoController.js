import { chamandoChamada, chamandoChamadaPorNome, inserirChamada, alterarChamada, deletarChamada } from "../repository/chamadoRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.get("/chamada", async (req, resp) => {

    try {
        const chamada = await chamandoChamada();

        resp.status(200).send(chamada) 
    } catch (err) {
        resp.status(400).send(err)
    }
   

});

endpoint.get("/chamada/:titulo", async (req, resp) => {
    try {
        const titulo = req.params.titulo;
        const chamada = await chamandoChamadaPorNome(titulo);

        resp.status(200).send(chamada) 
    } catch (err) {
        resp.status(400).send(err)
    }
   

});

endpoint.post("/chamada", async (req, resp) => {
    try {
        const novaChamada = req.body;
        await inserirChamada(novaChamada);

        resp.status(200).send() 

    } catch (err) {
        resp.status(400).send(err)
    }
   

});

endpoint.put("/chamada/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        const alteracao = req.body;
        await alterarChamada(alteracao, id);

        resp.status(200).send() 

    } catch (err) {
        resp.status(400).send(err)
    }
   

});

endpoint.delete("/chamada/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        await deletarChamada(id);

        resp.status(200).send() 

    } catch (err) {
        resp.status(400).send(err)
    }
   

});

export default endpoint;