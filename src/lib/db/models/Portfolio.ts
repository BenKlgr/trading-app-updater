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
import { Placement } from './Placement';

@Table({ tableName: 'portfolios' })
export class Portfolio extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Length({ max: 128 })
  @Column(DataType.STRING)
  name: string; // Ben's Portfolio

  @Column(DataType.STRING)
  owner: string;

  @Column(DataType.DECIMAL(12, 2))
  balance: number;

  @HasMany(() => Placement)
  placements: Placement[];
}
