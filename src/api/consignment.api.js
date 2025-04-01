import axios from "axios";
import {MJ_SECURITY_VAULT_CONSTANTS} from "../utils/constants.js";

const getConsignment = (consignments_serial_numbers, vault_number) => {
    console.log(vault_number, consignments_serial_numbers);
    return axios({
        method: 'GET',
        url: `${MJ_SECURITY_VAULT_CONSTANTS.SERVER_BASE_URL}/user/consignments/${vault_number}/${consignments_serial_numbers}`,
    });
}

export const CONSIGNMENT_API = {getConsignment};