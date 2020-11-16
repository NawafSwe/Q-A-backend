//executing command lines
const {exec} = require("child_process");
//asking input for collection name
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//structure files and directories
const models = 'models';
const controller = 'controller';
const route = 'route';
const validator = 'validator';

//function to automate creating files
/**
 * @author Nawaf Alsharqi
 * @function
 * @namespace gen
 * @param {string} collection name of the collection based on the user input
 * @param {string} file name of the files
 * @return {VoidFunction}
 * @throws {Error} it may throws an error for path issues or exiting files
 */
function gen(collection, file) {
    exec(`cd src/collections && mkdir ${collection} && cd ${collection} && touch ${file}-${controller}.ts && touch ${file}-${route}.ts && touch ${file}-${validator}.ts && mkdir ${models} && cd ${models} && touch ${file}-interface.ts && touch ${file}-model.ts`
        , (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
}

//assuming user enters name of collection which is plural like user's'
let fileNames = ''
let collectionName = ''
let didEnterName = false;
//reading user input
readline.question('collection name in plural:', input => {
    //removing spaces in case user adds space by mistake
    collectionName = input.trim();
    //removing s to make files not plural
    fileNames = fileNames.slice(0, collectionName.length - 1);
    console.log(`Loading creating ${collectionName}!`);
    didEnterName = true;
    if (didEnterName) {
        gen(collectionName, fileNames);
    }
    readline.close();
});




