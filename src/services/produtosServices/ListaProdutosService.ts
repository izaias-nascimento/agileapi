import Produtos from '../../models/Produto'

const ListaProdutosService = async (): Promise<Produtos[]> => {
  const produtos = await Produtos.findAll({ order: [['name', 'ASC']] })

  return produtos
}

export default ListaProdutosService
