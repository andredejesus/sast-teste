export class Treinamento {

    id: number;
    id_colaborador: number;
    nm_treinamento: string;
    data_treinamento: string;
    dias_vencimento: number;
    data_vencimento: string;
    situacao: string;

}

export class FiltroTreinamentoDTO {
    
    nomeColaborador:string;
    nomeTreinamento:string;
    dataInicioTreinamento:string;
    dataFimTreinamento:string;
    

}
