import test from 'ava';
import execa from 'execa';

test('Test example.js output', async t => {
	const ret = await execa('node', ['./example.js']);
	t.regex(ret.stdout, /SUCCESS/);
});
