import { todoSaga } from "./todosSaga";
    
    
    export function * rootSaga ():any{
        return yield todoSaga() ;
    }