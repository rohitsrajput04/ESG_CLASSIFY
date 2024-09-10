export interface StoreAuth {
    user:User |null;
    status:Status;

}
export interface Status{
    success:boolean;
    error:Error;
    loading:boolean;
}
export interface User {
    identifier: string | null;
    classification: string | null;
    firstName: string;
    lastName: string | null;
    owner: string | null;
    ownerType: string | null;
    roleID: number;
    newUser: boolean;
    thisPolicy: boolean;
    dbDirId: number;
    lineManagerId: number;
    roleListBox: boolean;
    roles: string[];
    type: string | null;
    id: number;
    status: string | null;
    state: string | null;
    actionType: string | null;
    modified: string | null;
    modifiedBy: string | null;
    modification: boolean
    hrId: number;
    ubr: string | null;
    locale: string | null;
    preference: string | null;
resources: Resource[];
bso: boolean;
}
export interface Resource{
    type:string,
    id:string
}