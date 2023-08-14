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


