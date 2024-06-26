import axios from 'axios';

const state = {
    todos: [
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }, limit) {
        limit = limit || 5;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        console.log(response.data);
        commit('setTodos', response.data)
    },

    async addTodo({ commit }, title) {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          { title, completed: false }
        );
    
        commit('newTodo', response.data);
    },

    async deleteTodo({ commit }, id) {
       await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },


};

const mutations = {
    setTodos: (state, todos) => {
       return state.todos = todos
    },
    newTodo: (state, todo) => {
        return state.todos.unshift(todo)
    },
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};


export default {
    state,
    getters,
    actions,
    mutations
}