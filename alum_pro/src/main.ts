import './style.css'
import {key} from './key.ts'
// const contentful = require('contentful')
import * as contentful from 'contentful'
const client = contentful.createClient(key)

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)