import axios from 'axios';

const state = {
    todos: [
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
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
};

const mutations = {
    setTodos: (state, todos) => {
       return state.todos = todos
    },
    newTodo: (state, todo) => {
        return state.todos.unshift(todo)
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}