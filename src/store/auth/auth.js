import { Auth, loadingContainer } from 'aws-amplify';


export const auth = {
    namespace: true,
    state: { user: null },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        async logout({ commit }) {
            commit("setUser", null);
            return await Auth.signOut();
        },
        async loadingContainer({ commit, dispatch }, { username, password }) {
            
        }
    },
    getters: {

    }
}