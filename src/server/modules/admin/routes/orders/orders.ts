import { NextFunction, Request, Response } from 'express';
import { findAll, insert } from 'modules/app/repositories/order';

export async function getList(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const orders = await findAll(req.query);
    res.json(orders);
  } catch (error) {
    next(error);
  }
}

export async function insertOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const newOrder = await insert(req.body);
    res.json(newOrder);
  } catch (error) {
    next(error);
  }
}