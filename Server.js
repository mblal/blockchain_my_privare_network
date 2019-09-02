'use strict';
const Hapi = require('@hapi/hapi');
const Router = require('./config/routing/router');
const Blockchain = require('./services/Blockchain');
const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    server.route(Router);
    await server.start();
    this.blockchain = new Blockchain.Blockchain();
    process.blockchain = this.blockchain;
    console.log('Server running on %s', server.info.uri);
    

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();