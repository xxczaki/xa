import test from 'ava';
import execa from 'execa';

test('output', async t => {
	const {stdout} = await execa('node', ['test/fixture.js']);
	t.regex(stdout, /SUCCESS/);
});
