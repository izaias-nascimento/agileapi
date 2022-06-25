import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey
  } from 'sequelize-typescript'
  
  @Table
  class Produto extends Model<Produto> {
    
    @PrimaryKey
    @Column(DataType.NUMBER)
      id: number
  
    @Column(DataType.TEXT)
      codigoFabrica: string
  
    @Column(DataType.TEXT)
      descricao: string
  
    @Column(DataType.DECIMAL)
      valorVista: number
  
    @Column(DataType.DECIMAL)
      valor: number
  
     @Column(DataType.NUMBER)
      parcelas: number
  
    @Column(DataType.NUMBER)
      quantidadeDisponivel: number
  } 
  
  export default Produto
  