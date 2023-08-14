
import { assertEquals } from "https://deno.land/std@0.198.0/assert/mod.ts";
import { Country, getCountries } from "./mod.ts";

const countries: Country[] = await getCountries("Canada");

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
