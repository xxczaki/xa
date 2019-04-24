import test from 'ava';
import execa from 'execa';

test('output', async t => {
	const ret = await execa.shell('node test/fixture.js');
	t.regex(ret.stdout, /SUCCESS/);
});
