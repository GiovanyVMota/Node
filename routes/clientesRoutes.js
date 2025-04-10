const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clienteController"); // ✅ essa linha importa o controller

const validaCliente = require("../middlewares/validaClientes"); // se você tiver validação


router.get("/", clientesController.listarClientes);
router.post("/", clientesController.criarCliente);
router.put("/:id", clientesController.atualizarCliente);
router.delete("/:id", clientesController.deletarCliente);

module.exports = router;
