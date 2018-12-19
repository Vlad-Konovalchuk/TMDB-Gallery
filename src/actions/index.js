import * as type from '../actionTypes/index'

export function addArticle(payload) {
    return { type: type.ADD_POST, payload }
};