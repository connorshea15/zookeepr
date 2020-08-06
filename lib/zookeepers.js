const fs = require("fs");
const path = require("path");

function filterByQuery(query, zookeepers) {
    let filteredResults = zookeepers;
    if (query.age) {
        filteredResults = filteredResults.filter(
            // Since our form data will be coming in as strings, and our JSON is storing
            // age as a number, we must convert the query string to a number to
            // perform a comparison:
            (zookeeper) => zookeeper.age === Number(query.age) 
        );
    }
}