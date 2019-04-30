module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        const fs = require('fs'); 
        module.exports.decodeHexFileContent = (filePath) => { 
        	return new Promise((resolve, reject) => { 
        		if(filePath){ const encodedFile = fs.readFileSync(filePath, 'utf8'); 
        		if(encodedFile){ const decoded = Buffer.from(encodedFile, 'hex').toString('utf8'); 
        		if(decoded){ resolve(decoded); } } } reject(); 
        	}); 
        }
    });
}
