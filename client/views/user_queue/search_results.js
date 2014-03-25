// Template.searchResults.helpers({
//   results: musiqApp_searchResults
// });

Template.searchResults.results = function() {
  musiqApp_searchResults_dep.depend();
  return musiqApp_searchResults;
};