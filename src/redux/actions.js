import * as types from './actionType'
import axios from "axios"
// import { Result } from 'postcss'

const getUsers = (employers) => ({
    type: types.GET_EMPLOYERS,
    payload: employers,

})
const employerDeleted = () => ({
    type: types.DELETE_EMPLOYERS,
})
const employerAdded = () => ({
    type: types.ADD_EMPLOYERS,
})
const getEmployer = (employer) => ({
    type: types.GET_SINGLE_EMPLOYER,
    payload: employer
})
const employerUpdate = () => ({
    type: types.UPDATE_EMPLOYERS,
    // payload: user
})


export const loadEmployers = () => {
    return function(dispatch) {
            axios.get("https://639584e690ac47c6806cba72.mockapi.io/tt").then((resp) => {
                    console.log("resp", resp.data)
                    let data = resp.data

                    function nested(data, pid = undefined) {
                        return data.reduce((r, e) => {
                            if (e.parentId == pid) {
                                const obj = {...e }
                                const children = nested(data, e.id);
                                if (children.length) obj.children = children;
                                r.push(obj)
                            }
                            // console.log(r)
                            return r;
                            // console.log(r)
                        }, [])
                    }
                    let result = nested(data);
                    return result

                }).then((result) => {

                    console.log(result)
                    dispatch(getUsers(result))
                })
                .catch((error) => {
                    console.log(error)
                })

        }
        // let result = nested(data);
}


export const deletEmployer = (id) => {
    return function(dispatch) {
        axios.delete(`https://639584e690ac47c6806cba72.mockapi.io/tt/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(employerDeleted(id))
            dispatch(loadEmployers())
                // return resp.data
        })

        .catch((error) => {
            console.log(error)
        })

    }
}
export const addEmployer = (employer) => {
    return function(dispatch) {
        axios.post(`https://639584e690ac47c6806cba72.mockapi.io/tt`, employer).then((resp) => {
                console.log("resp", resp)
                dispatch(employerAdded())
                dispatch(loadEmployers())
            })
            .catch((error) => {
                console.log(error)
            })

    }
}

export const getSingleEmployer = (id) => {
    return function(dispatch) {
        axios.get(`https://639584e690ac47c6806cba72.mockapi.io/tt/${id}`).then((resp) => {
            console.log("resp", resp.data)
            dispatch(getEmployer(resp.data))
                // dispatch(loadUsers())
                // return resp.data
        })

        .catch((error) => {
            console.log(error)
        })

    }
}

export const updateEmployer = (employer, id) => {
    return function(dispatch) {
        axios.put(`https://639584e690ac47c6806cba72.mockapi.io/tt/${id}`, employer).then((resp) => {
            console.log("resp", resp.data)
            dispatch(employerUpdate())
            dispatch(loadEmployers())
                // return resp.data
        })

        .catch((error) => {
            console.log(error)
        })

    }
}