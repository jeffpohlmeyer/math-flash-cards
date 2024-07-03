import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const a = Math.floor(Math.random() * 11);
	const b = Math.floor(Math.random() * 11);
	redirect(301, `/multiply/${a}/${b}`);
};
