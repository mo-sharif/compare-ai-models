import { fetchData } from "./fetchData";

export const fetchAIResults = async (prompt, setData, setLoading, setError) => {
    const apis = ['flanT5Small', 'byt5Small', 'phi2', 'mt5Small'];

    apis.forEach(async api => {
        setLoading(prevLoading => ({ ...prevLoading, [api]: true }));
        try {
            const result = await fetchData(api, prompt);
            setData(prevData => ({ ...prevData, [api]: result }));
        } catch (error) {
            setError(prevError => ({ ...prevError, [api]: error.message }));
        } finally {
            setLoading(prevLoading => ({ ...prevLoading, [api]: false }));
        }
    });
};
