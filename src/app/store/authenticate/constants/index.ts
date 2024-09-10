import { Status, StoreAuth } from "../models/authenticate.models";

export const STATUS_INITIAL_STATE: Status = {
    loading: false,
    success: false,
    error: null!
};

export const STATUS_LOADING_STATE: Status = {
    loading: true,
    success: false,
    error: null!
};

export const STATUS_SUCCESS_STATE: Status = {
    loading: false,
    success: true,
    error: null!
};

export const AUTH_INITIAL_STATE: StoreAuth = {
    status: { ...STATUS_INITIAL_STATE },
    user: null!
};