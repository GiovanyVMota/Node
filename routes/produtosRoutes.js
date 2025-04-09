const express = require("express");
const router = express.Router();
// Import the produtosController to handle product-related operations
const produtosController = require("../controllers/produtosController");

router.get("/", produtosController.listarProdutos);
router.post("/", produtosController.criarProduto);
router.put("/:id", produtosController.atualizarProduto);
router.delete("/:id", produtosController.deletarProduto);

module.exports = router;
