import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

const greet = (name) => {
    console.log(`hello ${name}`);
};

myEmitter.on('greet', greet);

myEmitter.emit('greet', 'C_11nJxx');

//Error Handler
myEmitter.on('error', (err) => {
    console.log(`Something went wrong: ${err}`);
});

//Simulate error
myEmitter.emit('error', new Error('Simulate error'));