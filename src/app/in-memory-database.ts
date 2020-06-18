import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';

export class InMomeryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamento de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinem, parques, praias, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' }
    ];

    return { categories }

  }
}
