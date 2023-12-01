function getFirstPair(response) {
   var keyValuePairs = Object.entries(response);
   if (keyValuePairs.length) return { [keyValuePairs[0][0]]: keyValuePairs[0][1] };
   return {};
}
getFirstPair({
  "testdaa101.com": "30",
  "testbb101.com": "50"
})