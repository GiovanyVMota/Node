const db = require("../configs/db");

// Listar todos os clientes
exports.listarClientes = (req, res) => {
  db.query("SELECT * FROM clientes", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
};

// Criar um novo cliente
exports.criarCliente = (req, res) => {
  const { nome, sobrenome, email, idade } = req.body;
  db.query("INSERT INTO clientes (nome,sobrenome, email, idade) VALUES (?, ?, ?, ?)", [nome, sobrenome, email, idade], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: "Cliente criado com sucesso!" });
  });
};

// Atualizar um cliente
exports.atualizarCliente = (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, email, idade} = req.body;
  db.query("UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?", [nome, sobrenome, email, idade, id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Cliente atualizado com sucesso!" });
  });
};

// Deletar um cliente
exports.deletarCliente = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM clientes WHERE id = ?", [id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Cliente deletado com sucesso!" });
  });
};
