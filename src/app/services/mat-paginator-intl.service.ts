
import { MatPaginatorIntl } from '@angular/material/paginator';

export class MatPaginatorIntlService extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Resultados por página'; 
  override nextPageLabel     = 'Siguiente página';
  override previousPageLabel = 'Anterior página';

  override getRangeLabel = function (page: number, pageSize: number, length: any) {
    if (length === 0) {
      return `Página 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  };
}
