class TaskCollection {

	constructor(tasks = []) {

		this.tasks = tasks;

	}

	log() {

		this.tasks.forEach(task => console.log(task));
		this.tasks.forEach((task, index) => console.log(task, index));
		this.tasks.forEach(() => console.log('task'));

	}

	prepare() {

		this.tasks.forEach(task => {

			console.log(this);

		})

		//Undefined because "this" isn't task
		this.tasks.forEach(function(task) {

			console.log(this);

		})

	}
}

class Task {}

new TaskCollection([

	new Task, new Task, new Task

]).log();	

new TaskCollection([

	new Task, new Task, new Task

]).prepare();	

let names = ["Luciano", "Gonçalves", "Junior"];

names = names.map(name => `${name} is my name`); //Template

console.log(names);