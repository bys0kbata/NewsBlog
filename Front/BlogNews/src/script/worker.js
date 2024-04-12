// eslint-disable-next-line no-undef



self.onmessage = async function(e) {
    const url = e.data.url;

    try {
        const response = await fetch(url,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.json()

        self.postMessage(responseData);
    } catch (error) {
        self.postMessage({ error: error.message });
    }
};