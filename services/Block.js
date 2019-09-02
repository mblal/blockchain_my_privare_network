/**
 * @author Mohamed BLAL
 *
 */

const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');

class Block {

    // Constructor - argument data will be the object containing the transaction data
	constructor(data){
		this.hash = null;                                           
		this.height = 0;                                       
		this.body = Buffer(JSON.stringify(data)).toString('hex');
		this.time = 0;                                             
		this.previousBlockHash = null;                             
    }
    
    /**
     *  validate() method will validate if the block has been tampered or not.
     *  Been tampered means that someone from outside the application tried to change
     *  values in the block data as a consecuence the hash of the block should be different.
     *  Steps:
     *  1. Return a new promise to allow the method be called asynchronous.
     *  2. Save the in auxiliary variable the current hash of the block (`this` represent the block object)
     *  3. Recalculate the hash of the entire block (Use SHA256 from crypto-js library)
     *  4. Compare if the auxiliary hash value is different from the calculated one.
     *  5. Resolve true or false depending if it is valid or not.
     *  Note: to access the class values inside a Promise code you need to create an auxiliary value `let self = this;`
     */
    validate() {
        let self = this;
        return new Promise((resolve, reject) => {
            let hash = self.hash;
                                            
            self.hash = SHA256(self.body).toString();
            if (self.hash === hash){
                resolve(true)
            }
            resolve(false);

        });
    }

    /**
     *  Auxiliary Method to return the block body (decoding the data)
     *  Steps:
     *  
     *  1. Use hex2ascii module to decode the data
     *  2. Because data is a javascript object use JSON.parse(string) to get the Javascript Object
     *  3. Resolve with the data and make sure that you don' data is a javascript object t need to return the data for the `genesis block` 
     *     or Reject with an error.
     */
    async getBData() {
        let data = this.body;
        let self = this;
        return new Promise((resolve, reject) => {
            let decodedData = hex2ascii(self.body);
            let json = JSON.parse(decodedData);
            if (this.height !== 0)
                resolve(json);
                resolve(null);
        });
       

    }

    /*getDecData() {
        let data = this.body;
        let self = this;
        let decodedData = hex2ascii(self.body);
        let json = JSON.parse(decodedData);
        if (this.height !== 0)
            return json;
            return null;
       

    }*/

}

module.exports.Block = Block;