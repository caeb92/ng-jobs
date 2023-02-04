import { Categoria } from "./categoria.model";
import { Comuna } from "./comuna.model";
import { Empresa } from "./empresa.model";
import { Region } from "./region.model";
import { Tag } from "./tag.model";

export interface OfertaLaboral {
    id?: number;
    titulo: string;
    descripcion: string;
    descripcionCorta: string;
    sueldoMin: number;
    sueldoMax: number;
    visitas: number;
    empresa: Empresa;
    region: Region;
    comuna: Comuna;
    categoria: Categoria;
    tags: Tag[]
}