(async () => {
  const database = require("./db");
  const produto = require("./produto");

  await database.sync();

  // Criar novo registro na tabela
  await produto.create({
    Nome: "João Lucas",
    DataCriacao: Date(),
  });

  await produto.create({
    Nome: "Diana Cristina",
    DataCriacao: Date(),
  });

  await produto.create({
    Nome: "Yara Sofia",
    DataCriacao: Date(),
  });

  // Alterar item da tabela
  const alterProd = await produto.findByPk(2);
  alterProd.Nome = "Arquivo Alterado";
  await alterProd.save();

  // Excluir item da tabela
  produto.destroy({
    where: { id: 1 },
  });

  // Consultar item específico da tabela
  const findProd = await produto.findByPk(3);
  console.log(findProd);

  // Listar todos os itens da tabela
  const findAllProd = await produto.findAll();
  console.log(findAllProd);
})();
