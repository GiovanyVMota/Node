// Importações
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const clientesRoutes = require("./routes/clientesRoutes");
const produtosRoutes = require("./routes/produtosRoutes");
const db = require("./configs/db");

// Inicialização do app
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Rotas
app.use("/clientes", clientesRoutes);
app.use("/produtos", produtosRoutes);

app.get("/", (req, res) => {
  res.send("API rodando!");
});

// Conectar ao banco de dados e iniciar o servidor
const PORT = process.env.PORT || 3000;
db.getConnection((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Banco de dados conectado!");
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
