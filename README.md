# Deno Countries STD Library
### Author: Abubaker Shangab
## This Deno module relies on the RESTful free API: https:restcountries.com to get the countries data.
1. The module exports a function getCountries(partOfName: string): Promise<Country[]> that returns a promise of an array of countries.
2. The function takes a string as a parameter, and returns a promise of an array of countries.
3. The module also exports an interface Country that describes the structure of the country object.
4. The array of countries is an array of objects, each object has the following properties, from the Country interface:

```
export interface Country {
  name: string;
  nativeName: string;
  cca2: string;
  cca3: string;
  region: string;
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  callCode: string;
  latLng: number[];
  flag: string;
}
```

1. name: string, the name of the country in English.
2. nativeName: string, the name of the country in its native language.
3. cca2: string, the two-letter country code.
4. cca3: string, the three-letter country code.
5. region: string, the region of the country.
6. currency: string, the name of the currency of the country.
7. currencyCode: string, the code of the currency of the country.
8. currencySymbol: string, the symbol of the currency of the country.
9. callCode: string, the calling code of the country.
10. latLng: number[], the latitude and longitude of the country.
11. flag: string, the URL of the flag of the country.
 
## To use it in a Deno App

```
import {Country, getCountries} from 'https://github.com/shangab/denocountries/index.ts'

const res:Country[] = await getCountries("can")
console.log(res)

```