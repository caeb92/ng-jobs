import { OfertaLaboral } from "./oferta-laboral.model";
import { PaginationMetadata } from "./pagination-metadata.model";

export interface RespuestaFiltroOfertasLaborales {
    items: OfertaLaboral[];
    meta: PaginationMetadata;
}