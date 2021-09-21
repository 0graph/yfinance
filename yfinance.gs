var json_data = {}

/**
 * Finds info about a particular stock
 *
 * @param {"AAPL"} ticker the stock to search
 * @param {"{'module':['sModule1','sModule2']}"} modules the modules you want stock information from (leave [] blank to get all submodules)
 * @param {true} header choose weather to have headers above the data
 * @return The module information requested for the stock
 * @customfunction
 */
function yFinance(ticker = "XEQT.TO", modules = "{'summaryDetail':['trailingPE','dividendYield']}",header = true) {

  //replaces ' with " for json support then parses it
  modules = JSON.parse(modules.replaceAll("'","\""))

  
  //Create Yahoo Finance Query URL
  //iterates over modules and adds them to end of query URL
  url = "https://query2.finance.yahoo.com/v10/finance/quoteSummary/" + ticker + "?modules="
  for(let x in modules) url = url + x + ","
  url = url.substring(0, url.length -1)
  console.log(url)


  
  
  try { //if none of the modules in the url are modules of the specified stock quotesummary.Result[0] will not work
        //replaces repsonse with empty data
    //Get Data from Yahoofinance
    var response = UrlFetchApp.fetch(url,{muteHttpException: true}).getContentText();

  } catch(err) {
    console.log(err)
    response = "{\"quoteSummary\":{\"result\":[{\"module\":[]}]}}"
  }
  
  //Then Parse to a JSON object for evaluation
  json_data = JSON.parse(response);
  //Strips json data to stock info only
  json_data = json_data.quoteSummary.result[0]



  //Format Data for use in sheets
  //removes data not needed by user
  var headers = [];
  var arr_data = [];
  //cycles through each module
  for(let x in modules) {
    //json response contains module x and x has specified submodules
    if(modules[x].length != 0 && json_data.hasOwnProperty(x)) {
      for(const y of modules[x]) {
        headers.push(y)
        if(json_data[x].hasOwnProperty(y)) {
          arr_data.push(output_formatter(x, y)) //strips unnecessary data from response
        } else {
          arr_data.push(" ")
        }
      }
    //json response contains module x and x does not have specified submodules (return all submodules)
    } else if (modules[x].length == 0 && json_data.hasOwnProperty(x)){
      for(let y in json_data[x]) {
        headers.push(y)
        arr_data.push(output_formatter(x, y))
      }
    //json repsonse does not contain module x (return blank)
    } else if (!json_data.hasOwnProperty(x)) {
      for(const y of modules[x]) {
        headers.push(y)
        arr_data.push("N/A")
      }
    } 
  }
  

  if(header == true) var data = [headers,arr_data]
  else var data = [arr_data]
  console.log(data)

  return data
  
}


//Strips unnessecary data from json_data for output
function output_formatter(x, y) {
  if(typeof json_data[x][y] == "object"){ //objects
    if(json_data[x][y] != null) {
      if(json_data[x][y].hasOwnProperty("raw")) return json_data[x][y]["raw"]
        else {
          var obj_str = JSON.stringify(json_data[x][y])
          if(obj_str = "{}") obj_str = " "
          return obj_str
      }
    } else {
      return " "
    }
  } else return json_data[x][y]
}
