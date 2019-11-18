const constants = {
    ACTION_PREFIX: "read_",
    UPDATE_PREFIX: "update_",
    CREATE_PREFIX: "create_",
    DELETE_PREFIX: "delete_",

    STARTED_SUFFIX: "_started",
    SUCCESS_SUFFIX: "_success",
    FAILURE_SUFFIX: "_failure"
};
export default constants;

export const State = {
    DEFAULT: 0,
    STARTED: 1,
    SUCCESS: 2,
    FAILURE: 3
};

export const ApiMethod = {
    GET: 0,
    POST: 1,
    PATCH: 2,
    DELETE: 3
}

export const Entity = {
    CUSTOMERS: "customer",
    VEHICLES: "vehicle",
    APPLICATIONS: "application",
    ACCOUNTS: "account",
    ACTIVITIES: "activity"
}

export const ExternalURL = {
    DYNAMICS_PREFIX: "https://sstack.crm.dynamics.com/api/data/v9.1/madmv_ma_",
    DYNAMICS_OOB_PREFIX: "https://sstack.crm.dynamics.com/api/data/v9.1/",
    DYNAMICS_USERID_SUFFIX: "WhoAmI",
    DYNAMICS_PLURAL_S: "s",
    DYNAMICS_SELECT_SUFFIX: "?$select=",
    DYNAMICS_FILTER_SUFFIX: "?$filter="
};
