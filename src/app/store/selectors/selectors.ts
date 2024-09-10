import { MemoizedSelector, createFeatureSelector, createSelector } from "@ngrx/store";
import { StoreCore, ToasterModel } from "../models/core.model";

const fSelector = createFeatureSelector('core');//STORE_CORE_NAMESPACE

const getToasterMessageRequest = createSelector(
    fSelector as MemoizedSelector<ToasterModel, StoreCore>, (state: StoreCore):
    ToasterModel => state && state.toasterMessage ? state.toasterMessage : null!);

    export const Coreselectors={
        getToasterMessageRequest
    }