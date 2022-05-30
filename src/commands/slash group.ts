import type { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";

const group = "example-testing";
const subgroup = "maths";
@Discord()
@SlashGroup({ name: group })
@SlashGroup({ name: subgroup, root: group })
export class Group {
	@Slash("add")
	@SlashGroup(subgroup, group)
	add(
		@SlashOption("x", { description: "x value" }) x: number,
		@SlashOption("y", { description: "y value" }) y: number,
		interaction: CommandInteraction
	): void {
		interaction.reply(String(x + y));
	}

	@Slash("multiply")
	@SlashGroup(subgroup, group)
	multiply(
		@SlashOption("x", { description: "x value" }) x: number,
		@SlashOption("y", { description: "y value" }) y: number,
		interaction: CommandInteraction
	): void {
		interaction.reply(String(x * y));
	}

	@Slash("root")
	@SlashGroup(group)
	root(
		@SlashOption("text") text: string,
		interaction: CommandInteraction
	): void {
		interaction.reply(text);
	}
}
