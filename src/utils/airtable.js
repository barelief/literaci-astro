console.log("Hello, Airtable inside Astro");
const airtableToken = import.meta.env.AIRTABLE_API_KEY;
const airtableBaseId = import.meta.env.AIRTABLE_BASE_ID;
let tableId = "Autorzy";
let url = `https://api.airtable.com/v0/${airtableBaseId}/${tableId}`;
let records;

// fetch data and save to `records`
let response = await fetch(url, {
  method: "GET",
  headers: {
    Accept: "application/json",
    charset: "utf-8",
    "Content-Type": "application/json",
    Authorization: `Bearer ${airtableToken}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    
    records = data.records;
    console.log("plain recrds:")
    console.log(records);
  });

// export single record (output and language[otional]) based on input,pattern
export function getSingleRecord(input, pattern, output) {
  // console.log(records);
  return records
    .filter((el) => {
      return el.fields[input] === undefined
        ? false
        : el.fields[input] === pattern;
    })
    .map((item) => item.fields[output]);
}

export function getFilteredRecords(input, pattern) {
  //console.log(records);
  return records.filter((el) => {
    // undefined solves error if record is not existing
    return el.fields[input] === undefined
      ? false
      : el.fields[input] === pattern;
  });
}

// export all records of default Table
export { records };

export async function getAllRecords(tableId) {
  let url = `https://api.airtable.com/v0/${airtableBaseId}/${tableId}`;
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      charset: "utf-8",
      "Content-Type": "application/json",
      Authorization: `Bearer ${airtableToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("getAllRecords: ");
      console.log(data.records);
      return data.records;
    });
}

// Here are values and longer url if you want to sort your data
// let sortField = "Słowo";
// let sortDirection = "asc";
// let url = `https://api.airtable.com/v0/${airtableBaseId}/${tableId}?sort%5B0%5D%5Bfield%5D=${sortField}&sort%5B0%5D%5Bdirection%5D=${sortDirection}`;
