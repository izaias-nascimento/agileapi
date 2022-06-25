import Produto from '../../models/Produto'

const ListaProdutosService = async (): Promise<Produto[]> => {
  const produtos = await Produto.findAll()

  // findAll({ order: [['name', 'ASC']] })

  return produtos
}

export default ListaProdutosService
