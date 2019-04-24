const xa = require('../dist');

console.log('\n');

xa.success('Build finished!\n');

xa.info('Loading...\n');

xa.warning('Something is not ok\n');

xa.error('Build broken, exiting\n');

xa.custom('TITLE', 'Nice description', {titleColor: 'yellow', backgroundColor: '#212121'});
