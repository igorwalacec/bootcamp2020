const express = require("express");
const cors = require("cors");

const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

function validateRepository(request, response, next) {
  const { title, url } = request.body;

  const validations = [];
  if (title == null || title.toString() === "") {
    validations.push("Please enter a valid title name.");
  }
  if (url == null || title.trim() === "") {
    validations.push("Please enter a valid URL.");
  }

  if (validations.length == 0) {
    return next();
  } else {
    return response
      .status(400)
      .json({
        message: "Validate the following items.",
        validations: validations,
      });
  }
}

const repositories = [];

// A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.
app.get("/repositories", (request, response) => {});

app.post("/repositories", validateRepository, (request, response) => {
  const { title, url, techs = [] } = request.body;

  const repository = {
    id: uuid(),
    title: title,
    url: url,
    techs: techs,
    likes: 0,
  };

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", validateRepository, (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
