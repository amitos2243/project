import './style.css'

// const contentful = require('contentful')
import * as contentful from 'contentful'
const client = contentful.createClient({
  space: 'ztfmhdgya9hf',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'owzanMo1aPJulLyxQv3wz_3pQU0uy-vuBhLShQAOI60'
})

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)