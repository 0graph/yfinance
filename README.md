# yfinance
A Yahoo Finance API Custom Function for Google sheets.

# Installation
1. on your sheet go to tools -> Script Editor
2. Create new script and copy function.gs to it

# Usage

### Ticker
the ticker according to yahoo finance of the stock you want to get data from
Example: 'AAPL', 'TD.TO', 'BRK-B'
* =yfinance(ticker,modules)
* =yfinance('AAPL',"{'assetProfile':[]}")

### Modules
Every stock has modules of data returned by yahoo finance
Each module has submodules (ex. peRatio) and you can specify these in an array or leave an empty [] array to return all submodules
returning all submodules may mess up formatting slightly
Format: "{'module1':['subModule1','subModule2'],
          'module2':[]}" (DONT use doublequotes for modules and submodules)
* =yfinance('AAPL',"{'price':['marketCap'],'earnings':[]}")

### Note
not all stocks contain the same modules/submodules so formatting errors may occur due to this. Some submodules have their own submodules (ex. insiderTransactions) which will be put as a JSON string in a cell and may by over the max cell char limit of google sheets. 




# Module List (Submodule List Coming SOON)
using the link below (replace {} with your ticker) and a JSON tree viewer to see submodules avaliable for a ticker for now
https://query2.finance.yahoo.com/v10/finance/quoteSummary/{YOUR-TICKER-HERE}?modules=assetProfle,earnings,etc


* assetProfile
* balanceSheetHistory
* balanceSheetHistoryQuarterly
* calendarEvents
* cashflowStatementHistory
* cashflowStatementHistoryQuarterly
* defaultKeyStatistics
* earnings
* earningsHistory
* earningsTrend
* esgScores
* financialData
* fundOwnership
* incomeStatementHistory
* incomeStatementHistoryQuarterly
* indexTrend
* industryTrend
* insiderHolders
* insiderTransactions
* institutionOwnership
* majorDirectHolders
* majorHoldersBreakdown
* netSharePurchaseActivity
* price
* recommendationTrend
* secFilings
* sectorTrend
* summaryDetail
* summaryProfile
* upgradeDowngradeHistory
* pageviews
* quotetype
