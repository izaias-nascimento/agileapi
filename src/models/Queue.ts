import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey
} from 'sequelize-typescript'
// import Queue from "./Queue";

@Table
class Queue extends Model<Queue> {
  @PrimaryKey
  @Column(DataType.NUMBER)
    id: number

  @Column(DataType.TEXT)
    name: string

  @Column(DataType.TEXT)
    color: string

  @Column(DataType.TEXT)
    greetingMessage: string

  // @ForeignKey(() => Dialogflow)
  @Column(DataType.NUMBER)
    dialogflowId: number

  // @BelongsTo(() => Dialogflow)
  // dialogflow: Dialogflow

  @Column(DataType.DATE)
    createdAt: Date

  @Column(DataType.DATE)
    updatedAt: Date
}

export default Queue
