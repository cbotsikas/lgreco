﻿// Get the settings from attributes
var searchKey = $("#cse").attr("data-key");
var lang = $("#cse").attr("data-lang");

google.load('search', '1', {language: lang, style: google.loader.themes.V2_DEFAULT});
google.setOnLoadCallback(function() {
  var customSearchOptions = {};
  var orderByOptions = {};
  customSearchOptions['enableOrderBy'] = false;
  //orderByOptions['keys'] = [{label: 'Relevance', key: ''} , {label: 'Date', key: 'date'}];
  //customSearchOptions['orderByOptions'] = orderByOptions;
  var customSearchControl =   new google.search.CustomSearchControl(searchKey, customSearchOptions);
  customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
  var options = new google.search.DrawOptions();
  options.enableSearchResultsOnly();
  options.setAutoComplete(true);
  customSearchControl.draw('cse', options);
  function parseParamsFromUrl() {
    var params = {};
    var parts = window.location.search.substr(1).split('&');
    for (var i = 0; i < parts.length; i++) {
      var keyValuePair = parts[i].split('=');
      var key = decodeURIComponent(keyValuePair[0]);
      params[key] = keyValuePair[1] ?
          decodeURIComponent(keyValuePair[1].replace(/\+/g, ' ')) :
          keyValuePair[1];
    }
    return params;
  }
  var urlParams = parseParamsFromUrl();
  var queryParamName = 'q';
  if (urlParams[queryParamName]) {
    customSearchControl.execute(urlParams[queryParamName]);
    $("#search").val(urlParams[queryParamName])
	$("#menu-nav_lang a").each(function(item,index){
		var link = $(item).attr("href");
		// Add the query string
		link = link + window.location.search;
		$(item).attr("href", link);
	});
  }
}, true);