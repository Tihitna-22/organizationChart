import * as types from './actionType'
import axios from "axios"
// import { Result } from 'postcss'

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,

})
const userDeleted = () => ({
    type: types.DELETE_USERS,
})
const userAdded = () => ({
    type: types.ADD_USERS,
})
const getUser = (user) => ({
    type: types.GET_SINGLE_USERS,
    payload: user
})
const userUpdate = () => ({
    type: types.UPDATE_USERS,
    // payload: user
})


export const loadUsers = () => {
    return function(dispatch) {
            axios.get("https://639960f516b0fdad773af872.mockapi.io/tt").then((resp) => {
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


export const deletUsers = (id) => {
    return function(dispatch) {
        axios.delete(`https://639960f516b0fdad773af872.mockapi.io/tt/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(userDeleted(id))
            dispatch(loadUsers())
                // return resp.data
        })

        .catch((error) => {
            console.log(error)
        })

    }
}
export const addUser = (user) => {
    return function(dispatch) {
        axios.post(`https://639960f516b0fdad773af872.mockapi.io/chrt`, user).then((resp) => {
                console.log("resp", resp)
                dispatch(userAdded())
                dispatch(loadUsers())
            })
            .catch((error) => {
                console.log(error)
            })

    }
}

export const getSingleUser = (id) => {
    return function(dispatch) {
        axios.get(`https://639960f516b0fdad773af872.mockapi.io/tt/${id}`).then((resp) => {
            console.log("resp", resp.data)
            dispatch(getUser(resp.data))
                // dispatch(loadUsers())
                // return resp.data
        })

        .catch((error) => {
            console.log(error)
        })

    }
}

export const updateUser = (user, id) => {
    return function(dispatch) {
        axios.put(`https://639960f516b0fdad773af872.mockapi.io/tt/${id}`, user).then((resp) => {
            console.log("resp", resp.data)
            dispatch(userUpdate())
            dispatch(loadUsers())
                // return resp.data
        })

        .catch((error) => {
            console.log(error)
        })

    }
}