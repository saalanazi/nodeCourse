const fs = require('fs')
const chalk = require('chalk')

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added.'))
    }else{
        console.log(chalk.red.inverse('note title is taken.'))
    }
    
}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    }catch(e){
        return []
    }
   
}
const removeNote = function(title){
    const notes = loadNotes()
    const noteTilteMatch = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length > noteTilteMatch.length){
        console.log(chalk.green.inverse('Note is removed.'))
        saveNotes(noteTilteMatch)
    }else{
        console.log(chalk.red.inverse('No note is match.'))
    }
    
}
const listNote = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse('your notes..'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('note Not found.'))
    }
}
module.exports = {
    addNotes: addNote,
    removeNotes: removeNote,
    listNotes: listNote,
    readNotes: readNote
}