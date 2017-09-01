import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi.js';

export function loadCourseSuccess(courses) {
    return {
        type: types.LOAD_COURSE_SUCCESS,
        courses
    };
}

export function loadCourses() {
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}
