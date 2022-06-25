import ItemOrcamento from '../../models/ItemOrcamento'
import Orcamento from '../../models/Orcamento'
import Produto from '../../models/Produto'

const ListaOrcamentosService = async (): Promise<Orcamento[]> => {
  const orcamentos = await Orcamento.findAll({
    include: [
      {
        model: ItemOrcamento,
        as: 'itens',
        include: [{
          model: Produto,
          as: 'produto'
        }]
      }]
  })

  // findAll({ order: [['name', 'ASC']] })

  return orcamentos
}

export default ListaOrcamentosService
