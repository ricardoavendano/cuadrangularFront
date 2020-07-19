import { Partido } from './partido';

export class Liga{

    ligaList: Partido[];

    constructor(ligaList: Partido[])
    {
        this.ligaList = ligaList;
    }
}