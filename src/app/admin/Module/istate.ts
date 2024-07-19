import { Icountry } from "./icountry";
import { Idistrict } from "./idistrict";

export interface Istate {
    stateId?: string,
    stateName: string,
    countryId: string,
    countryMaster?: Icountry,
    status: boolean,
    createdBY?: string,
    createdOn?: string,
    modifiedBy?: string,
    modifiedOn?: string,
    districtMasters?:Idistrict[];
}
