import { Istate } from "./istate";

export interface Icountry {
    countryId?: string,
    countryName:string,
    status: boolean,
    createdBY?: string,
    createdOn?: string,
    modifiedBy?: string,
    modifiedOn?: string,
    stateMasters?:Istate[];
}
