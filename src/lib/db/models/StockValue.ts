import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Stock } from './Stock';

@Table({ tableName: 'stockValue', timestamps: false })
export class StockValue extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.DECIMAL(12, 4))
  value: number;

  @Column(DataType.DATE)
  currentDate: Date;

  @BelongsTo(() => Stock)
  stock: Stock;

  @ForeignKey(() => Stock)
  @Column(DataType.UUID)
  stockId: string;
}
