const utile = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')
const { argv } = require('yargs')

// const command = process.argv[2]
// if(command === 'add'){
//     console.log('Adding note.')
// }else if(command === 'remove'){
//     console.log('Removing note.')
// }
console.log(process.argv)

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
        utile.addNotes(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        utile.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note.',
    builder:{
        title:{
            describe: 'read Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        utile.readNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'Listing a note.',
    builder:{
        title:{
            describe: 'list Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
       utile.listNotes(argv.title)
    }
})

yargs.parse()

