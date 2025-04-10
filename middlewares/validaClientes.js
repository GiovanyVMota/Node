module.exports = (req, res, next) => {
    const { nome, sobrenome, email, idade } = req.body;
  
    if (!nome || !email) {
      return res.status(400).json({ error: "Nome e email são obrigatórios." });
    }
  
    if (idade && (isNaN(idade) || idade < 0)) {
      return res.status(400).json({ error: "Idade inválida." });
    }
  
    next(); // Dados válidos, continua
  };
  