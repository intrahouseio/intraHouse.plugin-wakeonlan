const Plugin = require('./lib/plugin');
const wol = require('wake_on_lan');

const plugin = new Plugin();


plugin.on('device_action', (device) => {
  wol.wake(device.id, {
    address: device.address,
    num_packets: device.count,
    interval: device.interval,
    port: device.port,
  }, (e) => plugin.debug(e));
})

plugin.on('toolbar_command', (command) => {
  switch (command.type) {
    case 'MANUAL_WAKEONLAN':
      plugin.debug(command);
      break;
    default:
      break;
  }
})

plugin.on('start', () => {

});
