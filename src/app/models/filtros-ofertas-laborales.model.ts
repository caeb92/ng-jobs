import { Categoria } from "./categoria.model";
import { Comuna } from "./comuna.model";
import { Empresa } from "./empresa.model";
import { Modalidad } from "./modalidad.model";
import { Region } from "./region.model";
import { Tag } from "./tag.model";

export interface FiltrosOfertasLaborales {
    empresas: Empresa[];
    comunas: Comuna[];
    regiones: Region[];
    tags: Tag[];
    categorias: Categoria[];
    modalidades: Modalidad[];
}