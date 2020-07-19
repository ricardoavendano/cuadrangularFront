import { Equipo } from './equipo';

export class Partido{
    partidoList: Equipo[];

    constructor(partidoList: Equipo[])
    {
        this.partidoList = partidoList;
    }
}