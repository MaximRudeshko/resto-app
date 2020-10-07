import React from 'react';
import {RestoServiceConsumer} from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceConsumer>
                {
                    (restoService) => {
                        return <Wrapped {...props} restoService = {restoService}/>
                    }
                }
            </RestoServiceConsumer>
        )
    } 
};

export default WithRestoService;