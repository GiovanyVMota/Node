const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clienteController");

router.get("/", clientesController.listarClientes);
router.post("/", clientesController.criarCliente);
router.put("/:id", clientesController.atualizarCliente);
router.delete("/:id", clientesController.deletarCliente);

module.exports = router;
