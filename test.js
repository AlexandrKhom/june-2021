const EventEmitter = require('events');


class Logger extends EventEmitter{
  log = () => {
    // console.log(msg);
    this.emit('some_event', { id: 1, text: 'Event test text!' });
  };
}


module.exports = Logger;
