// This Deno module relies on the RESTful free API: https://restcountries.com to get the countries data.
// The module exports a function getCountries(partOfName: string): Promise<Country[]> that returns a promise of an array of countries.
// The function takes a string as a parameter, and returns a promise of an array of countries that have the string in their name.
// The array of countries is an array of objects, each object has the following properties:
// name: string, the name of the country in English.
// nativeName: string, the name of the country in its native language.
// cca2: string, the two-letter country code.
// cca3: string, the three-letter country code.
// region: string, the region of the country.
// currency: string, the name of the currency of the country.
// currencyCode: string, the code of the currency of the country.
// currencySymbol: string, the symbol of the currency of the country.
// callCode: string, the calling code of the country.
// latLng: number[], the latitude and longitude of the country.
// flag: string, the URL of the flag of the country.
// The module also exports an interface Country that describes the structure of the country object.

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
export const getCountries = (partOfName: string): Promise<Country[]> => {
  return new Promise(async (resolve, reject) => {
    const url = `https://restcountries.com/v3.1/name/${partOfName}`;
    const response = await fetch(url, { method: "GET" });
    if (response.status == 200) {
      
      response.json().then((data) => {
        const countries: Country[] = [];
        for (let idx = 0; idx < data.length; idx++) {
          const one = data[idx];
          const country = {
            name: one["name"]["common"],
            nativeName: "",
            cca2: one["cca2"],
            cca3: one["cca3"],
            region: one["region"],
            currency: one["currencies"][Object.keys(one["currencies"])[0]]["name"],
            currencyCode: Object.keys(one["currencies"])[0],
            currencySymbol: one["currencies"][Object.keys(one["currencies"])[0]]["symbol"],
            callCode: one["idd"]['root']+one["idd"]['suffixes'][0],
            latLng: one["latlng"],
            flag: one["flags"]["png"],
          };
          for (const key in one["name"]["nativeName"]) {
            country.nativeName = one["name"]["nativeName"][key]["official"];
            break;
          }
          countries.push(country);
        }
        resolve(countries);
      });
    } else {
      reject("No countries found, or connection error to : https://restcountries.com");
    }
  });
};

// Testing the module: denocountries:
// const res = await getCountries("can");
// log(res);


