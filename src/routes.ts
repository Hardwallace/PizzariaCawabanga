import { Router, Request, Response } from 'express'

const router = Router();

router.post("/users" , (req: Request, res: Response) => {
    res.json({message: "Funcionando!!!!!"});
})

export { router };