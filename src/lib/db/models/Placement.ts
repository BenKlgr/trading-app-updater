import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Portfolio } from './Portfolio';
import { Stock } from './Stock';

@Table({ tableName: 'placements' })
export class Placement extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column(DataType.STRING)
  amount: number;

  @BelongsTo(() => Stock)
  stock: Stock;

  @ForeignKey(() => Stock)
  @Column(DataType.UUID)
  stockId: string;

  @BelongsTo(() => Portfolio)
  portfolio: Portfolio;

  @ForeignKey(() => Portfolio)
  @Column(DataType.UUID)
  portfolioId: string;
}
