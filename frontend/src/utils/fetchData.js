const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

export const fetchData = async (endpoint, prompt) => {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: prompt }),
    });
    return response.json();
};
