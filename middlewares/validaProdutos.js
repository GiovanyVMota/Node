module.exports = (req, res, next) => {
    const { nome, descricao, preco } = req.body;
  
    if (!nome || nome.trim() === "") {
      return res.status(400).json({ error: "O nome do produto é obrigatório." });
    }
  
    if (!descricao || descricao.trim() === "") {
      return res.status(400).json({ error: "A descrição do produto é obrigatória." });
    }
  
    if (preco === undefined || preco === null || isNaN(preco)) {
      return res.status(400).json({ error: "O preço do produto deve ser um número válido." });
    }
  
    next();
  };
  