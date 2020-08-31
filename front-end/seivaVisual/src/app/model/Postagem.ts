import { Tema } from './Tema';

export class Postagem {
    public id: number;
    public titulo: string;
    public descricao: string;
    public date: Date;
    public tema: Tema
}