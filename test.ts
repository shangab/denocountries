
import { assertEquals } from "https://deno.land/std@0.198.0/assert/mod.ts";
import { Country, getCountries } from "./mod.ts";

const countries: Country[] = await getCountries("Canada");
console.log(countries);

Deno.test("Result length",() => {
    assertEquals(countries.length, 1);
})

Deno.test("Country name",() => {
    assertEquals(countries[0].name, "Canada");
})

Deno.test("Country CCA2",  () => {
    assertEquals(countries[0].cca2, "CA");
})
Deno.test("Country CCA3",() => {
    assertEquals(countries[0].cca3 , "CAN");
})
Deno.test("Country region",() => {
    assertEquals(countries[0].region , "Americas");
})
Deno.test("Country currency",() => {
    assertEquals(countries[0].currency , "Canadian dollar");
})

Deno.test("Country currencyCode",() => {
    assertEquals(countries[0].currencyCode , "CAD");
})

Deno.test("Country currencySymbol",() => {
    assertEquals(countries[0].currencySymbol , "$");
})
Deno.test("Country callCode",() => {
    assertEquals(countries[0].callCode , "+1");
})
Deno.test("Country latLng",() => {
    assertEquals(countries[0].latLng , [ 60, -95 ]);
})
Deno.test("Country flag",() => {
    assertEquals(countries[0].flag ,"https://flagcdn.com/w320/ca.png");
})