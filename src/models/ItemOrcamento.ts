import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey
} from 'sequelize-typescript'
import Orcamento from './Orcamento'
import Produto from './Produto'
// import Queue from "./Queue";

@Table
class ItemOrcamento extends Model<ItemOrcamento> {
  @PrimaryKey
  @Column(DataType.NUMBER)
    id: number

  @ForeignKey(() => Orcamento)
  @Column(DataType.NUMBER)
    idOrcamento: number

    @BelongsTo(() => Orcamento)
      orcamento: Orcamento

  @Column(DataType.NUMBER)
    seqItem: number

  @ForeignKey(() => Produto)
  @Column(DataType.NUMBER)
    idProduto: number

  @BelongsTo(() => Produto)
    produto: Produto

  @Column(DataType.DECIMAL)
    valor: number
}

export default ItemOrcamento
