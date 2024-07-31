import { fetchData } from "./fetchData";

export const fetchAIResults = async (prompt, setData, setError) => {
    const apis = ['flanT5Small', 'byt5Small', 'phi2', 'mt5Small'];

    apis.forEach(async api => {
        try {
            const result = await fetchData(api, prompt);
            setData(prevData => ({ ...prevData, [api]: result }));
            return result
        } catch (error) {
            setError(prevError => ({ ...prevError, [api]: error.message }));
            return error.message
        }
    });
};