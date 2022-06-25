import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  HasMany
} from 'sequelize-typescript'
import Orcamento from './Orcamento'
// import Queue from "./Queue";

@Table
class Lead extends Model<Lead> {
  @PrimaryKey
  @Column(DataType.NUMBER)
    id: number

  @Column(DataType.TEXT)
    nome: string

  @Column(DataType.DATE)
    dat_inclusao: Date

  @Column(DataType.TEXT)
    responsavel: string

  @Column(DataType.NUMBER)
    fone: number

  @Column(DataType.NUMBER)
    dddfone: number

  @Column(DataType.NUMBER)
    dddCelular: number

  @Column(DataType.NUMBER)
    celular: number

  @Column(DataType.TEXT)
    email: string

  @Column(DataType.TEXT)
    tipoPessoa: string

  @Column(DataType.TEXT)
    canal: string

  @Column(DataType.TEXT)
    motivacao: string

  @HasMany(() => Orcamento)
    orcamento: Orcamento
}

export default Lead
