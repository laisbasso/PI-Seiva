import { Tema } from './Tema';

export class Postagem {
    public id: number;
    public titulo: string;
    public descricao: string;
    public data: Date;
    public tema: Tema;
    public imagem: string
}