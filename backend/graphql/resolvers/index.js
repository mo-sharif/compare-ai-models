import { queryAPI } from '../../services/apiRequest.js';
import { apiConfigs } from '../../config/apis.js';

const resolvers = {
    Query: apiConfigs.reduce((acc, api) => {
        acc[api.name] = async (_, { inputs }) => {
            return queryAPI(api.url, { inputs });
        };
        return acc;
    }, {}),
};

export default resolvers;
