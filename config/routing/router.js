var BlockchainController = require('../../controllers/BlockchainController');

module.exports = [
    {
    method: 'GET',
    path: '/block/{height}',
    handler: BlockchainController.getBlockByHeight
   
    },
    {
        method: 'POST',
        path: '/requestValidation',
        options: {
            handler: BlockchainController.requestOwnership
            }
       
    },
    {
        method: 'POST',
        path: '/submitstar',
        options: {
            handler: BlockchainController.submitStar
            }
       
    },
    {
        method: 'GET',
        path: '/block/hash/{hash}',
        options: {
            handler: BlockchainController.getBlockByHash
            }
       
    },
    {
        method: 'GET',
        path: '/blocks/{address}',
        options: {
            handler: BlockchainController.getStarsByOwner
            }
       
    }
];