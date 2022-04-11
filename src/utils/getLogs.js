export const logs = async (credentials, functionName, time) => {
	try {
		const data = await fetch(`http://localhost:1111/aws/getLogs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				region: credentials.region,
				credentials: {
					accessKeyId: credentials.credentials.accessKeyId,
					secretAccessKey: credentials.credentials.secretAccessKey,
				},
				function: "hw-function",
			}),
		});
		const formattedData = await data.json();
		return formattedData;
	} catch (e) {
		console.log(e);
	}
};
