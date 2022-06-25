import ItemOrcamento from '../../models/ItemOrcamento'
import Lead from '../../models/Lead'
import Orcamento from '../../models/Orcamento'
import Produto from '../../models/Produto'

const ListaLeadsService = async (): Promise<Lead[]> => {
  const leads = await Lead.findAll({
    include: [
      {
        model: Orcamento,
        as: 'orcamento',
        include: [
          {
            model: ItemOrcamento,
            as: 'itens',
            include: [{
              model: Produto,
              as: 'produto'
            }]
          }]
      }]
  })

  // findAll({ order: [['name', 'ASC']] })

  return leads
}

export default ListaLeadsService
