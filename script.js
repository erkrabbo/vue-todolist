const todoList = new Vue({
    el: '#todoList',
    data: {
        newTask: '',
        taskList:[
            {
                id: 1,
                text: 'Fare i compiti',
                done: false,
            },
            {
                id: 2,
                text: 'Fare i compiti',
                done: false,
            },
            {
                id: 3,
                text: 'Fare i compiti',
                done: false,
            },
            {
                id: 4,
                text: 'Fare i compiti',
                done: false,
            },
            {
                id: 5,
                text: 'Fare i compiti',
                done: false,
            },
            {
                id: 6,
                text: 'Fare i compiti',
                done: false,
            },
        ],
    },
    methods: {
        removeTask(taskIndex){
            this.taskList.splice(taskIndex, 1);
            this.taskList.slice(taskIndex).forEach((element, index) => {
                element.id = taskIndex + index + 1;
            });
        },
        addTask(){
            const newTask = {
                id: this.taskList.length + 1,
                text: this.newTask.trim()[0].toUpperCase() + this.newTask.trim().slice(1).toLowerCase() ,
                done: false,
            }
            this.taskList.push(newTask);
            this.newTask = '';
        }
    }
})


