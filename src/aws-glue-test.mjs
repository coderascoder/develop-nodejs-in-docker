import { uniqueNamesGenerator, names } from 'unique-names-generator';

export function runTest() {
  const randomName = uniqueNamesGenerator({
    dictionaries: [names, names],
    separator: ' ',
  }); // big_red_donkey
  
  
  
  console.log('hello wd', randomName)  
}