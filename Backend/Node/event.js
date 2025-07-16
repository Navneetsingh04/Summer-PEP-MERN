const Emitter = require('events');
const emitter = new Emitter();

function registerEvent(){
    emitter.emit('register');
    console.log('Registration sucessfull');
}

emitter.on('register', () => {
    console.log('Email event triggered');
});

emitter.on('register',() => {
    console.log('Logs event trigger');
});
emitter.on('register',() => {
    console.log('Analytics event trigger');
});
emitter.on('register', () => {
    console.log('Personalize event trigger');
});


registerEvent();

