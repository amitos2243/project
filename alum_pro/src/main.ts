import './style.css'
import {key} from './key.ts'
// const contentful = require('contentful')
import * as contentful from 'contentful'
const client = contentful.createClient(key)



client.getEntries()
.then((content) => {console.log(content.items)

for (let i = 0; i < content.items.length; i++) {
    const content2 : any = document.querySelector('.div')
     content2.textContent = content.items[i].fields.bed
}

})
.catch(console.error)

