import axios from 'axios'

const state = {
    userDetails: {},
    isLoggedIn: true,
}

const getters = {
    userDetails(state) {
        return state.userDetails
    },
    loggedIn(state) {
        return state.isLoggedIn
    }
}

const actions = {
    registerUser({}, user) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/register', {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation
                })
                .then(response => {
                    if (response.data) {
                        window.location.replace('/login')
                        resolve(response)
                    } else {
                        reject(response)
                    }
                }).catch((error) => {
                reject(error);
            })
        })
    },

    loginUser(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/login', payload)
                .then(response => {
                    if (response.data.access_token) {
                        localStorage.setItem('token', response.data.access_token)
                        window.location.replace('/dashboard')
                    }
                }).catch((error) => {
                reject(error)
            })
        })
    },
    logout(ctx) {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            ctx.commit('setLoggedIn', false)
            resolve(true)
            window.location.replace('login')
        })
    },
    setLoggedInstate(ctx) {
        return new Promise((resolve) => {
            if (localStorage.getItem('token')) {
                ctx.commit('setLoggedIn', true)
                resolve(false)
            }
            ctx.commit('setLoggedIn', false)
            resolve(false)
        })
    }


}

const mutations = {
    setLoggedIn(state, payload) {
        state.isLoggedIn = payload
    }


}

export default {
    namespaced: true,
    actions,
    state,
    mutations,
    getters
}
