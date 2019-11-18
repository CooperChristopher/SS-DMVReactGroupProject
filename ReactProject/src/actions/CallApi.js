/************************************
 * Name:            CallApi.js
 * Description:     Function declarations and descriptions for calling
 *                  the Microsoft Dynamics REST API
 * Author:          Christopher Cooper
 * Date:            Nov 18, 2019
 *************************************/
import Dispatcher from '../dispatcher/appDispatcher.js';
//import axios from 'axios';
import constants, { Entity, ApiMethod, ExternalURL } from '../constants/DataLoaderConstants.js';
//import { adalApiFetch } from '../adalConfig.js';

const CallApi = {
    // define the basic config object to be sent in an api call
    config: {
        'OData-MaxVersion': 4.0,
        'OData-Version': 4.0,
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    },
    /***********************************************
     * Function: MakeApiCall
     * Description: Makes call to Dynamics api for the given entity and method
     * Input Parameters: string entityName, enum method from ApiMethod enums in DataLoaderConstants.js, and
     *                   object extraParams which is checked for a member called Id if a Guid is needed for the
     *                   desired method, filter for a filter string if needed, array select for columns to select
     *                   and data for the data needed to be sent to the api call
     * Input: data return from successful api call
     * Output: none
     * Return: string of id if returned
     *************************************************/
    MakeApiCall: (entityName, method, extraParams) => {
        
    },

    /***************************************************************
     * Function: CreateDispatchObj
     * Description: creates the object to be sent to the dispatcher
     * Input Parameters: string entityType, enum method, enum actionSuffix, obj result (can be empty) looks for
     *                   property called 'data'
     * Input: none
     * Output: none
     * Return: none
     ***************************************************************/
    CreateDispatchObj: (entityType, method, actionSuffix, result) => {
        let dispatchObj = {};
        // check the method
        switch(method){
            case ApiMethod.GET:
                dispatchObj['actionType'] = constants.ACTION_PREFIX + entityType + actionSuffix;
                break;
            case ApiMethod.POST:
                dispatchObj['actionType'] = constants.CREATE_PREFIX + entityType + actionSuffix;
                break;
            case ApiMethod.PATCH:
                dispatchObj['actionType'] = constants.UPDATE_PREFIX + entityType + actionSuffix;
                break;
            case ApiMethod.DELETE:
                dispatchObj['actionType'] = constants.DELETE_PREFIX + entityType + actionSuffix;
                break;
            default:
                console.log("Method not recognized.");
                break;
        }

        if (result['data']) {
            dispatchObj['data'] = result['data'];
        }

        console.log(dispatchObj);

        CallApi.DispatchAction(dispatchObj);
    },

    // sends object to the dispatcher
    DispatchAction: (dispatchObj) => {
        Dispatcher.dispatch(dispatchObj);
    }
}

module.exports = CallApi;