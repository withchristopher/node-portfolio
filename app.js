const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }]);
};

promptUser().then(answers => console.log(answers));
// const fs = require('fs');
// const inquirer = require('inquirer');

// const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio Complete! Check out index.html to see the output');
// })