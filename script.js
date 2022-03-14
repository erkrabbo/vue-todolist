const todoList = new Vue({
    el: '#todoList',
    data: {
        newTask: '',
        taskList:[
            {
                // id: 0,
                text: 'fare i compiti',
                done: false,
            }
        ],
    },
    methods: {
        removeTask(taskIndex){
            this.taskList.splice(taskIndex, 1);
        },
        addTask(){
            const newTask = {
                text: this.newTask.trim(),
                done: false,
            }
            this.taskList.push(newTask);
        }
    }
})


