import { Address } from "src/app/models/address.models";

export class Costumer {
    public costumerId: string;
    public costumerName: string;
    public costumerCPF: string; 
    public costumerBirthDate: string;//Data Nascimento
    public costumerGender: number;//Gênero
    public costumerPhone: string; //Telefone
    public costumerAddress: Address;//Endereço
}