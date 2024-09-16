import { ESG_ROUTES } from "../routing.routes";

export const NavMenuList = [

    {
        menu_name: 'Submit A Deal',
        route: ['/' + ESG_ROUTES.ESG_DEAL_INITIATION],
        selector: 'SUBMIT-A-DEAL',
        allowed_roles: ['Deal_Readonly', 'ESG_RQST_CREATOR_FO']
    },
    {
        menu_name: 'Deal_Queue',
    }

];
export const EPC_NAV_MENU_NAME = 'Energy Efficiency';
export const EPC_ROLE = 'EPC Role';
export const FEATURE_FLAT_MAPPING = [
    {
        flag: 'energyEfficienct',
        menu_name: 'Energy Efficiency'
    }
];