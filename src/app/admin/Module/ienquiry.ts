export interface Ienquiry {
     enquiryId?: string,
    enquiryName:string,
    phoneNo: string,
    email: string,
    gender: string,
    dob: string,
    enquiryFor?: string,
    status?: boolean,
    createdBY?:string,
    createdOn?: string,
    modifiedBy?: string,
    modifiedOn?: string
}
