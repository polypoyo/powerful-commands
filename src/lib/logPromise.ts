export async function logPromise(promise: Promise<Response>) {
	const awaited = await promise;
	console.log(await awaited.text());
}
