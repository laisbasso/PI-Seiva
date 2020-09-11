import { Postagem } from './Postagem';

export class Tema {
    public id: number;
    public descricao: string;
    public imagem: string;
    public postagem: Postagem []
}