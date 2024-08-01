const config = {
    apiConfigs: [
        {
            name: 'flanT5Small',
            url: 'https://api-inference.huggingface.co/models/google/flan-t5-small',
        },
        {
            name: 'byt5Small',
            url: 'https://api-inference.huggingface.co/models/google/byt5-small',
        },
        {
            name: 'mt5Small',
            url: 'https://api-inference.huggingface.co/models/google-t5/t5-small',
        },
        {
            name: 'phi2',
            url: 'https://api-inference.huggingface.co/models/microsoft/phi-2',
        },
    ],
    logos: {
        googleLogo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
        byte5Logo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
        miniLmLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png?20210729021049',
    },
    services: [
        { name: 'flanT5Small', title: 'Flan-T5-Small', logo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' },
        { name: 'byt5Small', title: 'Byte5-Small', logo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' },
        { name: 'phi2', title: 'Phi-2', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png?20210729021049' },
        { name: 'mt5Small', title: 'Mt-5-Small', logo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' },
    ],
};

// Use for profuction env and Github actions variable
// const config = JSON.parse(process.env.REACT_APP_CONFIG);

export default config;
