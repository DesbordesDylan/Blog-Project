const INITIAL_STATE = {
    articles: []
}

/*const ADD_ARTICLE = "ADD_ARTICLE"

export default function articleReducer(state= INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_ARTICLE: 
            return [...state, action.payload]
        default:
            return state
    }
} */

function articleReducer(state = INITIAL_STATE, action){

    switch(action.type) {
        case "ADDARTICLE":
            const newArr = [...state.articles];
            newArr.unshift(action.payload);
            return {
                articles: newArr
            }
        case "LOADARTICLES": {
            return {
                ...state,
                articles: action.payload
            }
        }
    }

    return state;
}

export default articleReducer;

export const getArticles = () => dispatch => {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: "LOADARTICLES",
            payload: data
        })
    })
}