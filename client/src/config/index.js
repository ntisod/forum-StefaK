const makeCfg = _ => {
    let cfg = {};
    cfg.host = "localhost";
    cfg.port = 4000;
    cfg.api_url = `http://${cfg.host}:${cfg.port}/api/`;

    return cfg;
}

export default makeCfg();