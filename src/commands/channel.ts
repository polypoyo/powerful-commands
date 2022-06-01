import { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
const group = "channel";
@Discord()
@SlashGroup({ name: group })
export class ChannelGroup {
	@Slash("create", { description: "Create a new channel" })
	@SlashGroup(group)
	async create(
		@SlashOption("name")
		name: string,
		interaction: CommandInteraction
	) {
		interaction.reply("NYI");
		interaction.guild;
	}
}
