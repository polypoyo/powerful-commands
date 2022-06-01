import { Get, Router } from "@discordx/koa";
import type { Context } from "koa";
import { bot } from "../main.js";
import { html } from "../lib/html.js";
@Router()
export class API {
	@Get("/")
	index(context: Context): void {
		const unsafe = html`<script>
			alert(1);
		</script>`;
		context.body = html`
			<meta name="color-scheme" content="light dark" />
			<div style="text-align: center">
				<h1>
					<a href="https://discord-ts.js.org">discord.ts</a> rest api server
					example
				</h1>
				<p>
					powered by <a href="https://koajs.com/">koa</a> and
					<a href="https://www.npmjs.com/package/@discordx/koa"
						>@discordx/koa</a
					>
					${unsafe}
				</p>
			</div>
		`;
	}

	@Get()
	guilds(context: Context): void {
		context.body = `${bot.guilds.cache.map((g) => `${g.id}: ${g.name}\n`)}`;
	}
}
