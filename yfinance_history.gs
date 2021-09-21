/**
 * Finds info about a particular stock
 *
 * @param {"AAPL"} ticker the stock to search
 * @param {"1d"} interval the interval for the data returned
 * @param {"YYYY-MM-DD"} period1 the start period for data to be returned
 * @param {"2000-10-05"} period2 the end period for data to be returned
 * @param {"['event1','event2']"} events the types of historical events you want data on (use an empty array [] if you only need price data)
 * @param {true} header choose weather to have headers above the data
 * @return The Historical data of the modules selected for a stock within a time period
 * @customfunction
 */
function yfinance_history(ticker = "COST", interval="1wk", period1="2021-01-10", period2="2021-09-01", events=["dividends"], header = true) {
  
  //Valid Input Data
  eventslist = ["capitalGain","dividends","splits"]
  intervallist = ["1m", "2m", "5m", "15m", "30m", "60m", "90m", "1h", "1d", "5d", "1wk", "1mo", "3mo"]
  str_events = ""

  //Output Arrays
  histinfo = [["Date","open","high","low","close","volume"]]
  histinfo_oldlength = histinfo[0].length //used later in data formatter as events are added to header later increasing length



  //Input Data Validation and Formatting
  if (!intervallist.includes(interval)) { 
    return "Invalid interval"
  }
  try {
    period1 = new Date(period1).getTime() / 1000
    period2 = new Date(period2).getTime() / 1000
  } catch (err) {
    console.log(err)
    return "Invaid Date / Format"
  }
  events = JSON.parse(events.replaceAll("'","\""))
  for(const x of events) {
    if(eventslist.includes(x)){
      str_events += x + "|"
      histinfo[0].push(x)
    }
  }
  str_events = str_events.slice(0, -1)



  url = "query1.finance.yahoo.com/v8/finance/chart/" + ticker + "?interval=" + interval + "&period1=" + period1 + "&period2=" + period2
  if(events.length) {
    url = url + "&events=" + str_events
  }
  console.log(url)
  var response = UrlFetchApp.fetch(url,{muteHttpException: true}).getContentText();

  //Then Parse to a JSON object for evaluation
  json_data = JSON.parse(response);
  //Strips json data to stock info only
  data = json_data.chart.result[0]
  console.log(data)


  //Historical Info Array Population
  for(var i = 0; i < data["timestamp"].length;i++) { //loops through price/volume data for each timestamp
    temparray = [new Date(data["timestamp"][i]*1000)]
    for(var j = 1; j<histinfo_oldlength;j++) { //loops through histinfo headers and adds timestamp's data for each header
      temparray[j] = data.indicators.quote[0][histinfo[0][j]][i]
    }
    for(var j = histinfo_oldlength; j < histinfo[0].length;j++) {
      if(data.hasOwnProperty("events")) {
        if(data["events"][histinfo[0][j]].hasOwnProperty(data["timestamp"][i])) {
          temparray[j] = data["events"][histinfo[0][j]][data["timestamp"][i]]["amount"]
        } else temparray[j] = ""
      } else temparray[j] = ""
      
    }
    histinfo.push(temparray)
  }
  console.log(histinfo)
  return histinfo

}
