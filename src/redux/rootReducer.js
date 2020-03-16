import {ADD_USER, REMOVE_USER } from './actionCreator';

const initialState = {
    users: [],
    id: 0
};
/* this.state = {
    users: [
        {name: 'Henrry', lastname: "enamorado", email: "henamor"},
        {name: 'aylen', lastname: "delgado", email: "adelgado"},
        {name: 'yusel', lastname: "enamorado", email: "yenamorado"},
    ]
} */

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            var newState = {...state};
            newState.id++;
            return{
                ...newState,
                users: [...newState.users, {name: action.user.name,
                    lastname: action.user.lastname, email: action.user.email, id: newState.id}]
            };
        case REMOVE_USER:
            let users = state.users.filter(val => val.id !== action.id);
            return{...state, users};
        default:
            return state;
    }
}