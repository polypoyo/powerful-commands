export async function logPromise(promise: Promise<any>) {
	const awaited = await promise;
	console.log(await awaited.json());
}
