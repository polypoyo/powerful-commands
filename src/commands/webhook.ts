import {
	Client,
	CommandInteraction,
	TextBasedChannel,
	Webhook,
} from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
//@ts-expect-erro
import { logPromise } from "../api/logPromise.js";
const group = "webhook";
import dotenv from "dotenv";
import { sleep } from "../api/sleep.js";
dotenv.config();
@Discord()
@SlashGroup({ name: group, description: "Manage webhooks" })
export class WebHookCommand {
	@Slash("create", { description: "Create a webhook" })
	@SlashGroup(group)
	async create(
		@SlashOption("name", { type: "STRING" })
		name: string,
		@SlashOption("picture", { type: "STRING", required: false })
		avatar: string,
		interaction: CommandInteraction
	): Promise<void> {
		await interaction.reply({ flags: 0b01000000, content: "Creating..." });
		const channel: TextBasedChannel | any = interaction.channel;
		const hook: Webhook = await channel?.createWebhook(name, { avatar });
		interaction.editReply({ content: `Here's your webhook: ${hook.url}` });
	}

	@Slash("exec", { description: "Sends a message using a webhook" })
	@SlashGroup(group)
	async exec(
		@SlashOption("text", { type: "STRING" })
		text: string,
		interaction: CommandInteraction | any
	): Promise<void> {
		const hooks: Webhook[] = await interaction.channel?.fetchWebhooks();
		hooks.forEach((hook, i) => {
			logPromise(
				fetch(hook.url, {
					method: "POST",
					body: JSON.stringify({ content: `${text}` }),
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				})
			);
		});
		const reply = interaction.reply({ content: "Sent!", flags: 0b01000000 });
		await sleep(1_500);
		// interaction.deleteReply();
	}
	@Slash("list", { description: "Lists webhooks in the current channel" })
	@SlashGroup(group)
	async list(interaction: CommandInteraction | any): Promise<void> {
		const hooks: Webhook[] = await interaction.channel?.fetchWebhooks();
		console.log(hooks);
		interaction.reply({
			content: `${"```"}json\n${JSON.stringify(hooks, null, 2)}${"```"}`,
			flags: 0b01000000,
		});
	}
}
