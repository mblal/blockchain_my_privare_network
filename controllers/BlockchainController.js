var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Blockchain.Blockchain();
        return object;
    }
 
    return {
        getInstance: function () {
            if (!process.blockchain) {
                instance = createInstance();
            }
            //console.log(process.blockchain);
            //console.log('Same instance');
            return process.blockchain;
        }
    };
})();

const Blockchain = require('../services/Blockchain');
class BlockchainController {

    
    // Enpoint to Get a Block by Height (GET Endpoint)
    async getBlockByHeight(request, reply) {
        let blockchain = Singleton.getInstance();
            if(request.params.height) {
                let height = parseInt(request.params.height);
                let block = await blockchain.getBlockByHeight(height);
                if(block){
                    return block;
                } else {
                    return 'Block Not Found!';
                }
            } else {
                return "Block Not Found! Review the Parameters!";
            }
            
      
    }
    // Endpoint that allows user to request Ownership of a Wallet address (POST Endpoint)
    async requestOwnership(request, reply) {
        console.log(request.payload.address);
        let blockchain = Singleton.getInstance();
            if(request.payload.address) {
                const address = request.payload.address;
                const message = await blockchain.requestMessageOwnershipVerification(address);
                if(message){
                    return message
                } else {
                    return "An error happened!"
                }
            } else {
                return "Check the Body Parameter!";
            }
    }

    // Endpoint that allow Submit a Star, yu need first to `requestOwnership` to have the message (POST endpoint)
    async submitStar(request, reply) {
            if(request.payload.address && request.payload.message && request.payload.signature && request.payload.star) {
                const address = request.payload.address;
                const message = request.payload.message;
                const signature = request.payload.signature;
                const star = request.payload.star;

                let blockchain = Singleton.getInstance();

                try {
                    let block = await blockchain.submitStar(address, message, signature, star);
                    if(block){
                        return block;
                    } else {
                        return "An error happened!";
                    }
                } catch (error) {
                    return error;
                }
            } else {
                return "Check the Body Parameter!";
            }
    }

    // This endpoint allows you to retrieve the block by hash (GET endpoint)
    async getBlockByHash(request, reply) {
            if(request.params.hash) {
                const hash = request.params.hash;
                let blockchain = Singleton.getInstance();
                let block = await blockchain.getBlockByHash(hash);
                if(block){
                    return block;
                } else {
                    return "Block Not Found!";
                }
            } else {
                return "Block Not Found! Review the Parameters!";
            }
    }

    // This endpoint allows you to request the list of Stars registered by an owner
    async getStarsByOwner(request, reply) {
        
            if(request.params.address) {
                const address = request.params.address;
                let blockchain = Singleton.getInstance();

                try {
                    let stars = await blockchain.getStarsByWalletAddress(address);
                    if(stars){
                        return stars;
                    } else {
                        return "Block Not Found!";
                    }
                } catch (error) {
                    return "An error happened!";
                }
            } else {
                return "Block Not Found! Review the Parameters!";
            }
    }

}

module.exports = new BlockchainController();