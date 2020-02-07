import { Foto } from "./foto";

export class User {
    nome:string;
    login:string;
    idPessoa: number;
    foto: Foto;
    jwt: string;

    constructor(nome?:string,
                login?:string,
                idPessoa?:number,
                foto?:Foto) {
        this.nome = nome;
        this.login = login;
        this.idPessoa = idPessoa;
        this.foto = foto;
    }
}