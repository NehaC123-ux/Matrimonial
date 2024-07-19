import { Igotra } from "./igotra";

export interface Isubcaste {
    subCasteId?: string,
    subCasteName: string,
    status: boolean,
    createdBY?: string,
    createdOn?: string,
    modifiedBy?: string,
    modifiedOn?: string,
    gotraMasters?: Igotra[]
}
