// import config from '../config/config';

export const getCorsOptions = (req: any, callback: any) => {
    let corsOptions;
    const ALLOWED_HOSTS: string[] = [];
    // const ALLOWED_HOSTS = config.cors.allowed_hosts; // TODO
    if (ALLOWED_HOSTS.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { // reflect (enable) the requested origin in the CORS response
            // origin: true,
            origin: req.header('Origin'),
            credentials: true,
            methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
            // eslint-disable-next-line max-len
            allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, sam-user-id, session-id, language, cachepolicy, cache-control',
        };
    }
    else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
}