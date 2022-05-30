import type { CommandInteraction, TextBasedChannel, Webhook } from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
const group = "webhook";
@Discord()
@SlashGroup({ name: group })
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
	exec(interaction: CommandInteraction): void {
		interaction.reply({ content: "NYI", flags: 0b01000000 });
	}
}
