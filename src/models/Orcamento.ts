import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
  HasMany,
  BelongsTo
} from 'sequelize-typescript'
import ItemOrcamento from './ItemOrcamento'
import Lead from './Lead'
// import Queue from "./Queue";

@Table
class Orcamento extends Model<Orcamento> {
  @PrimaryKey
  @Column(DataType.NUMBER)
    id: number

  @ForeignKey(() => Lead)
  @Column(DataType.NUMBER)
    idLead: number

  @BelongsTo(() => Lead)
    lead: Lead;
  
  @Column(DataType.DATE)
    dat_inclusao: Date

  @HasMany(() => ItemOrcamento)
    itens: ItemOrcamento[];
}

export default Orcamento
