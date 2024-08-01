import { fetchData } from "./fetchData";
import config from "../config";

const apis = config.apiConfigs.map(config => config.name);

export const fetchAIResults = async (prompt, setData, setLoading, setError) => {

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
