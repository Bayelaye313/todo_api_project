import express, {Request, Response, application} from "express";
import cors from "cors";
require('dotenv').config();
import { AppDataSource } from "./DataSource";
import { todo } from "./todo";


const app = express();

app.use(express.json());
app.use(cors());

AppDataSource.initialize()
    .then(() => {
        console.log("here you can start to work with your database");
        const todoRepository = AppDataSource.getRepository(todo)

        app.get("/todos", async (req: Request, res: Response) => {
            try {
                const allTodos = await todoRepository.find();
                return res.json({
                    status: "ok",
                    data: allTodos
                });
            } catch (error) {
                console.error("Error fetching todos:", error);
                return res.status(500).json({
                    status: "error",
                    message: "Failed to fetch todos"
                });
            }
        });

        app.post("/todos", async (req: Request, res: Response) => {
            try {
                const data: {task:string, dateDue: string} = req.body;
                const newTodo = {
                    ...data,
                    done: false,
                };
                const task = await todoRepository.save(newTodo);
                return res.json({
                    status: "ok",
                    data: task
                });
            } catch (error) {
                console.error("Error saving todo:", error);
                return res.status(500).json({
                    status: "error",
                    message: "Failed to save todo"
                });
            }
        });

        app.patch("/todos/:id", async (req: Request, res: Response) => {
            try {
                const isTodone = req.body.done;
                const id = parseInt(req.params.id);
                const findTodo = await todoRepository.findOneBy({id});
                let rslt;
                if (findTodo) {
                    findTodo.done = isTodone;
                    rslt = await todoRepository.save(findTodo)

                }
                return res.json({
                    status: "ok",
                    data: rslt,
                });
            } catch (error) {
                console.error("Error saving todo:", error);
                return res.status(500).json({
                    status: "error",
                    message: "Failed to save todo"
                });
            }
        });
        app.delete("/todos/:id", async (req: Request, res: Response) => {
            try {
                const id = parseInt(req.params.id);
                const rslt = await todoRepository.delete({id})

                return res.json({
                    status: "ok",
                    data: rslt,
                });
            } catch (error) {
                console.error("Error removing todo:", error);
                return res.status(500).json({
                    status: "error",
                    message: "Failed to save todo"
                });
            }
        });



        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server started on port ${process.env.PORT || 3000}`);
        });

    })
    .catch((error) => {
        console.error("Database initialization error:", error);
        process.exit(1);
    });
