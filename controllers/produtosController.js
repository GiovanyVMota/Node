const db = require("../configs/db");

// Listar todos os produtos
exports.listarProdutos = (req, res) => {
  db.query("SELECT * FROM produtos", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
};

// Criar um novo produto
exports.criarProduto = (req, res) => {
  const { nome, preco } = req.body;
  db.query("INSERT INTO produtos (nome, preco) VALUES (?, ?)", [nome, preco], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: "Produto criado com sucesso!" });
  });
};

// Atualizar um produto
exports.atualizarProduto = (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;
  db.query("UPDATE produtos SET nome = ?, preco = ? WHERE id = ?", [nome, preco, id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Produto atualizado com sucesso!" });
  });
};

// Deletar um produto
exports.deletarProduto = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM produtos WHERE id = ?", [id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Produto deletado com sucesso!" });
  });
};
