import fetch from 'node-fetch';

export const queryAPI = async (url, data) => {
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    });
    return response.json();
};