import { IOrder } from 'interfaces/models/order';
import { Model } from 'objection';

export class Order extends Model implements IOrder {
  public id?: number;
  public description: string;
  public quantity: number;
  public value: number;
  public createdDate?: Date;
  public updatedDate?: Date;

  public static get tableName(): string {
    return 'Orders';
  }

  public $beforeInsert(): void {
    this.createdDate = new Date();
    this.updatedDate = new Date();
  }

  public $beforeUpdate(): void {
    this.updatedDate = new Date();
  }
}
