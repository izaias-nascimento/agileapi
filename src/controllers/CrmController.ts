import { Request, Response } from 'express'
// import ListaProdutosService from '../services/produtosService/ListaProdutosService'

export const index = async (req: Request, res: Response): Promise<Response> => {
  // const produtos = await ListaProdutosService()

  return res.status(200).json({})
}

export const store = async (req: Request, res: Response): Promise<Response> => {
  // const { name, color, greetingMessage } = req.body;

  // const queue = await CreateQueueService({ name, color, greetingMessage });

  return res.status(200).json({})
}

export const show = async (req: Request, res: Response): Promise<Response> => {
  // const { queueId } = req.params;

  // const queue = await ShowQueueService(queueId);

  return res.status(200).json({})
}

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // const { queueId } = req.params;

  // const queue = await UpdateQueueService(queueId, req.body);

  return res.status(201).json({})
}

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // const { queueId } = req.params;

  // await DeleteQueueService(queueId);

  return res.status(200).send()
}
