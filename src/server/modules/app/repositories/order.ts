import { IOrder } from 'interfaces/models/order';
import { IPaginationParams } from 'interfaces/pagination';
import { Order } from 'models/order';
import { Page } from 'objection';

export async function findAll(params: IPaginationParams): Promise<Page<Order>> {
  const orders = await Order.query().page(params.page, params.pageSize).orderBy('createdDate', 'desc');
  return orders;
}

export async function insert(model: IOrder): Promise<Order> {
  return await Order.query().insert(<Order>model);
}