const todoList = new Vue({
    el: '#todoList',
    data: {
        newTask: '',
        taskList:[
            {
                text: 'Fare i compiti',
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
                text: this.newTask.trim()[0].toUpperCase() + this.newTask.trim().slice(1).toLowerCase() ,
                done: false,
            }
            this.taskList.push(newTask);
            this.newTask = '';
        }
    }
})


