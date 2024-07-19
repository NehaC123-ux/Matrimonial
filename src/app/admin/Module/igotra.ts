import { Isubcaste } from "./isubcaste";

export interface Igotra {
    gotraId?: string,
    gotraName:string,
    subCasteId: string,
    subCasteMaster?: Isubcaste,
    status: boolean,
    createdBY?: string,
    createdOn?: string,
    modifiedBy?: string,
    modifiedOn?: string
}
