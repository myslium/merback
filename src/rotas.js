import chamadoController from "./controller/chamadoController.js";

export default function rotas(servidor) {
    servidor.use(chamadoController);
}