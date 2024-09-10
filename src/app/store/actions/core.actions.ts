import { Action } from "@ngrx/store";

class SetToasterMessageRequest implements Action {

    readonly type= '[Toaster] Set Toaster Message';
    constructor(public payload: { message: string, type: string }) { }

}
export const CoreActions = { SetToasterMessageRequest };
export type CoreActionsUnion = | SetToasterMessageRequest;