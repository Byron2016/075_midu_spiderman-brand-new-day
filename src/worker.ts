import { handle } from '@astrojs/cloudflare/handler';
import { SITE_URL } from './consts';

const CANONICAL = new URL(SITE_URL);
const APEX_HOST = CANONICAL.hostname.replace(/^www\./, '');

/**
 * Worker entry: 301 del apex (sin www) a www, y el resto al handler de Astro.
 * Requiere assets.run_worker_first para interceptar también el HTML estático.
 */
export default {
	async fetch(
		request: Request,
		env: Cloudflare.Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const url = new URL(request.url);

		if (url.hostname === APEX_HOST) {
			url.protocol = 'https:';
			url.hostname = CANONICAL.hostname;
			return Response.redirect(url.toString(), 301);
		}

		return handle(request, env, ctx);
	}
};
