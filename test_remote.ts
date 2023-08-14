import {Country, getCountries} from "https://raw.githubusercontent.com/shangab/denocountries/main/mod.ts"

const res:Country[] = await getCountries("can")
console.log(res)