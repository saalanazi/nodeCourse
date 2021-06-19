// Using yargs lib;
const yargs = require('yargs')
yargs.version('12.0.2')
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    handler: function(){
        console.log('Removing a note.')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note.',
    handler: function(){
        console.log('reading a note')
    }
})
yargs.command({
    command: 'list',
    describe: 'Listing a note.',
    handler: function(){
        console.log('Listing a note')
    }
})

yargs.parse()
// console.log(yargs.argv)