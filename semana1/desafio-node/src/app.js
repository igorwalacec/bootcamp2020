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
    return response.status(400).json({
      message: "Validate the following items.",
      validations: validations,
    });
  }
}

function validateRepositoryId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid project ID." });
  } else {
    return next();
  }
}
const repositories = [];

// A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.
app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

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

  return response.status(201).json(repository);
});

app.put(
  "/repositories/:id",
  validateRepositoryId,
  validateRepository,
  (request, response) => {
    const { id } = request.params;
    const { title, url, techs = [] } = request.body;

    const repositoryIndex = repositories.findIndex(
      (repository) => repository.id === id
    );

    if (repositoryIndex < 0) {
      return response.status(400).json({ error: "Repository not found." });
    } else {
      repositories[repositoryIndex].title = title;
      repositories[repositoryIndex].url = url;
      repositories[repositoryIndex].techs = techs;
      return response.json(repositories[repositoryIndex]);
    }
  }
);

app.delete("/repositories/:id", validateRepositoryId, (request, response) => {
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository not found." });
  } else {
    repositories.splice(repositoryIndex, 1);
    return response.status(204).send();
  }
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
