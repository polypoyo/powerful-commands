import type { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";

const group = "calc";
@Discord()
@SlashGroup({ name: group, description: "4-function Calculator" })
export class CalculatorGroup {
	@Slash("add")
	@SlashGroup(group)
	add(
		@SlashOption("x", { description: "x value" }) x: number,
		@SlashOption("y", { description: "y value" }) y: number,
		interaction: CommandInteraction
	): void {
		interaction.reply(String(x + y));
	}
	@Slash("subtract")
	@SlashGroup(group)
	subtract(
		@SlashOption("x", { description: "x value" }) x: number,
		@SlashOption("y", { description: "y value" }) y: number,
		interaction: CommandInteraction
	): void {
		interaction.reply(String(x - y));
	}

	@Slash("multiply")
	@SlashGroup(group)
	multiply(
		@SlashOption("x", { description: "x value" }) x: number,
		@SlashOption("y", { description: "y value" }) y: number,
		interaction: CommandInteraction
	): void {
		interaction.reply(String(x * y));
	}
	@Slash("divide")
	@SlashGroup(group)
	divide(
		@SlashOption("x", { description: "x value" }) x: number,
		@SlashOption("y", { description: "y value" }) y: number,
		interaction: CommandInteraction
	): void {
		interaction.reply(String(x / y));
	}
}
