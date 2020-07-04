import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Igor",
    email: "igor@email.com",
    password: "123456",
    techs: ["C#", "JS", { title: "teste", experience: 1 }],
  });
  return response.json({ message: "Hello World" });
}
