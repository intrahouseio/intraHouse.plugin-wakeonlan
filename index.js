const Plugin = require('./lib/plugin');

const plugin = new Plugin();


plugin.on('device_action', (device) => {
  plugin.debug("incomming action: " + device.id + " / " + device.command);
})

plugin.on('toolbar_command', (command) => {
  switch (command.type) {
    case 'DEVICE_SEARCH':
      break;
    default:
      break;
  }
})

plugin.on('start', () => {

});
