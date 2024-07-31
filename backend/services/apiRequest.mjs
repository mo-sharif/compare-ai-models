import fetch from 'node-fetch';

export async function queryAPI(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}
