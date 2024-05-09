import { DataSource } from "typeorm"
import { todo } from "./todo"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "tododb",
    synchronize: true,
    logging: false,
    entities: [todo], //["src/model/*.ts"],
    migrations: [],
    subscribers: [],
})