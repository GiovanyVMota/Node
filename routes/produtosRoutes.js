const express = require("express");
const router = express.Router();
const produtosController = require("../controllers/produtosController");
const validaProduto = require("../middlewares/validaProdutos");

router.get("/", produtosController.listarProdutos);
router.post("/", validaProduto, produtosController.criarProduto);
router.put("/:id", validaProduto, produtosController.atualizarProduto);
router.delete("/:id", produtosController.deletarProduto);

module.exports = router;
