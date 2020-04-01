import test from 'ava';
import execa from 'execa';

test('output', async t => {
	const returnValue = await execa('node', ['test/fixture.js']);
	t.regex(returnValue.stdout, /SUCCESS/);
});
