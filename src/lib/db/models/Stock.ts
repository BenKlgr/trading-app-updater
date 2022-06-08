import {
  Column,
  Model,
  Table,
  IsUUID,
  DataType,
  PrimaryKey,
  Length,
  HasMany,
  Default,
} from 'sequelize-typescript';
import { StockValue } from './StockValue';
import { Placement } from './Placement';

@Table({ tableName: 'stocks' })
export class Stock extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string; // f6789e69-21a4-4aa3-b455-6efb91ee9582

  @Length({ min: 3, max: 4 })
  @Column(DataType.STRING)
  ticker: string; // MZBK (3-4 length)

  @Length({ max: 128 })
  @Column(DataType.STRING)
  name: string; // Maze Bank inc.

  @Column(DataType.DECIMAL(12, 4))
  currentTrend: number; // -1 to 1

  @Column(DataType.DECIMAL(12, 4))
  momentum: number;

  @HasMany(() => StockValue)
  stockValues: StockValue[];

  @HasMany(() => Placement)
  placements: Placement[];
}
