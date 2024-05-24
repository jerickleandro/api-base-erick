import { DataSource } from "typeorm";
import { Base } from "../models/index";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "ip-server",
    port: 3306,
    username: "nome-usuario",
    password: "chave",
    database: "nome-bd",
    logging: true,
    entities: [Base],
    synchronize: false

});