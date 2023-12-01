import axios from 'axios';

export default {
  name: 'app',
  components: {
    AddTodo
  },
  data(){
    return {
      todos: []
    }
  },

  methods: {
    // not allowed to use function keyword here  
    async printJson(){
      let result = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=1');
      console.log("result is = " + result)
      console.log("result.title is = " + result.title)
    },    
  computed: 
  {
    formattedJSON() {
      return JSON.stringify(this.myObject, null, 2);
    }
  }
    addTodo(newTodo) {
      this.printJson()  
    }
  }
}