import { Istate } from "./istate"

export interface Idistrict {
    districtId?: string,
    districtName: string,
    stateId: string,
    stateMaster?:Istate
    status: boolean,
    createdBY?: string,
    createdOn?: string,
    modifiedBy?: string,
    modifiedOn?: string
    
    
}
