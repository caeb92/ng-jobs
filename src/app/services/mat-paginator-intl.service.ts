
import { MatPaginatorIntl } from '@angular/material/paginator';

export class MatPaginatorIntlService extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Resultados por página'; 
  override nextPageLabel     = 'Siguiente';
  override previousPageLabel = 'Anterior';

  override getRangeLabel = function (page: number, pageSize: number, length: any) {
    if (length === 0 || pageSize === 0) {
      return '0 od ' + length;
    }
    length = Math.max(length, 0);
    
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' / ' + length;
  };
}
