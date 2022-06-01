export function html(strings: TemplateStringsArray, ...values: string[]) {
	let str = "";
	strings.forEach((string, i) => {
		str += string + safe_tags_replace(values[i] ?? "");
	});
	return str;
}

const tagsToReplace: Object = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
};

function replaceTag(tag: string) {
	return (tagsToReplace[tag] as string) || tag;
}

function safe_tags_replace(str: string) {
	return str.replace(/[&<>]/g, replaceTag);
}
