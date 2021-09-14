# yfinance
A Yahoo Finance API Custom Function for Google sheets. This function can return any data or statistics for yahoo finance stocks. Options support currently in development

# Installation
1. on your sheet go to tools -> Script Editor
2. Create new script and copy function.gs to it
3. Once saved it should be ready for use

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




# Module List / Submodule List
NOTE: Some submodules may not be listed

<details>
<summary>assetProfile </summary>
<br>
	- address1
	<br><br>
	- city
	- state
	- zip
	- country
	- phone
	- website
	- industry
	- sector
	- longBusinessSummary
	- fullTimeEmployees
	- companyOfficers
	- auditRisk
	- boardRisk
	- compensationRisk
	- shareHolderRightsRisk
	- overallRisk
	- governanceEpochDate
	- compensationAsOfEpochDate
	- maxAge
	- address2
	- fax
* recommendationTrend
	- trend
	- maxAge
* cashflowStatementHistory
	- cashflowStatements
	- maxAge
* indexTrend
	- maxAge
	- symbol
	- peRatio
	- pegRatio
	- estimates
* defaultKeyStatistics
	- maxAge
	- priceHint
	- enterpriseValue
	- forwardPE
	- profitMargins
	- floatShares
	- sharesOutstanding
	- sharesShort
	- sharesShortPriorMonth
	- sharesShortPreviousMonthDate
	- dateShortInterest
	- sharesPercentSharesOut
	- heldPercentInsiders
	- heldPercentInstitutions
	- shortRatio
	- shortPercentOfFloat
	- beta
	- impliedSharesOutstanding
	- morningStarOverallRating
	- morningStarRiskRating
	- category
	- bookValue
	- priceToBook
	- annualReportExpenseRatio
	- ytdReturn
	- beta3Year
	- totalAssets
	- yield
	- fundFamily
	- fundInceptionDate
	- legalType
	- threeYearAverageReturn
	- fiveYearAverageReturn
	- priceToSalesTrailing12Months
	- lastFiscalYearEnd
	- nextFiscalYearEnd
	- mostRecentQuarter
	- earningsQuarterlyGrowth
	- revenueQuarterlyGrowth
	- netIncomeToCommon
	- trailingEps
	- forwardEps
	- pegRatio
	- lastSplitFactor
	- lastSplitDate
	- enterpriseToRevenue
	- enterpriseToEbitda
	- 52WeekChange
	- SandP52WeekChange
	- lastDividendValue
	- lastDividendDate
	- lastCapGain
	- annualHoldingsTurnover
* industryTrend
	- maxAge
	- symbol
	- peRatio
	- pegRatio
	- estimates
* quoteType
	- exchange
	- quoteType
	- symbol
	- underlyingSymbol
	- shortName
	- longName
	- firstTradeDateEpochUtc
	- timeZoneFullName
	- timeZoneShortName
	- uuid
	- messageBoardId
	- gmtOffSetMilliseconds
	- maxAge
* incomeStatementHistory
	- incomeStatementHistory
	- maxAge
* fundOwnership
	- maxAge
	- ownershipList
* summaryDetail
	- maxAge
	- priceHint
	- previousClose
	- open
	- dayLow
	- dayHigh
	- regularMarketPreviousClose
	- regularMarketOpen
	- regularMarketDayLow
	- regularMarketDayHigh
	- dividendRate
	- dividendYield
	- exDividendDate
	- payoutRatio
	- fiveYearAvgDividendYield
	- beta
	- trailingPE
	- forwardPE
	- volume
	- regularMarketVolume
	- averageVolume
	- averageVolume10days
	- averageDailyVolume10Day
	- bid
	- ask
	- bidSize
	- askSize
	- marketCap
	- yield
	- ytdReturn
	- totalAssets
	- expireDate
	- strikePrice
	- openInterest
	- fiftyTwoWeekLow
	- fiftyTwoWeekHigh
	- priceToSalesTrailing12Months
	- fiftyDayAverage
	- twoHundredDayAverage
	- trailingAnnualDividendRate
	- trailingAnnualDividendYield
	- navPrice
	- currency
	- fromCurrency
	- toCurrency
	- lastMarket
	- volume24Hr
	- volumeAllCurrencies
	- circulatingSupply
	- algorithm
	- maxSupply
	- startDate
	- tradeable
* insiderHolders
	- holders
	- maxAge
* calendarEvents
	- maxAge
	- earnings
	- exDividendDate
	- dividendDate
* upgradeDowngradeHistory
	- history
	- maxAge
* price
	- maxAge
	- preMarketChangePercent
	- preMarketChange
	- preMarketTime
	- preMarketPrice
	- preMarketSource
	- postMarketChange
	- postMarketPrice
	- regularMarketChangePercent
	- regularMarketChange
	- regularMarketTime
	- priceHint
	- regularMarketPrice
	- regularMarketDayHigh
	- regularMarketDayLow
	- regularMarketVolume
	- averageDailyVolume10Day
	- averageDailyVolume3Month
	- regularMarketPreviousClose
	- regularMarketSource
	- regularMarketOpen
	- strikePrice
	- openInterest
	- exchange
	- exchangeName
	- exchangeDataDelayedBy
	- marketState
	- quoteType
	- symbol
	- underlyingSymbol
	- shortName
	- longName
	- currency
	- quoteSourceName
	- currencySymbol
	- fromCurrency
	- toCurrency
	- lastMarket
	- volume24Hr
	- volumeAllCurrencies
	- circulatingSupply
	- marketCap
* balanceSheetHistory
	- balanceSheetStatements
	- maxAge
* earningsTrend
	- trend
	- maxAge
* secFilings
	- filings
	- maxAge
* institutionOwnership
	- maxAge
	- ownershipList
* majorHoldersBreakdown
	- maxAge
	- insidersPercentHeld
	- institutionsPercentHeld
	- institutionsFloatPercentHeld
	- institutionsCount
* balanceSheetHistoryQuarterly
	- balanceSheetStatements
	- maxAge
* earningsHistory
	- history
	- maxAge
* majorDirectHolders
	- holders
	- maxAge
* summaryProfile
	- address1
	- city
	- state
	- zip
	- country
	- phone
	- website
	- industry
	- sector
	- longBusinessSummary
	- fullTimeEmployees
	- companyOfficers
	- maxAge
	- address2
	- fax
* netSharePurchaseActivity
	- maxAge
	- period
	- buyInfoCount
	- buyInfoShares
	- buyPercentInsiderShares
	- sellInfoCount
	- sellInfoShares
	- sellPercentInsiderShares
	- netInfoCount
	- netInfoShares
	- netPercentInsiderShares
	- totalInsiderShares
* insiderTransactions
	- transactions
	- maxAge
* sectorTrend
	- maxAge
	- symbol
	- peRatio
	- pegRatio
	- estimates
* incomeStatementHistoryQuarterly
	- incomeStatementHistory
	- maxAge
* cashflowStatementHistoryQuarterly
	- cashflowStatements
	- maxAge
* earnings
	- maxAge
	- earningsChart
	- financialsChart
	- financialCurrency
* financialData
	- maxAge
	- currentPrice
	- targetHighPrice
	- targetLowPrice
	- targetMeanPrice
	- targetMedianPrice
	- recommendationMean
	- recommendationKey
	- numberOfAnalystOpinions
	- totalCash
	- totalCashPerShare
	- ebitda
	- totalDebt
	- quickRatio
	- currentRatio
	- totalRevenue
	- debtToEquity
	- revenuePerShare
	- returnOnAssets
	- returnOnEquity
	- grossProfits
	- freeCashflow
	- operatingCashflow
	- earningsGrowth
	- revenueGrowth
	- grossMargins
	- ebitdaMargins
	- operatingMargins
	- profitMargins
	- financialCurrency
* fundProfile
	- maxAge
	- styleBoxUrl
	- family
	- categoryName
	- legalType
	- managementInfo
	- feesExpensesInvestment
	- feesExpensesInvestmentCat
	- initInvestment
	- initIraInvestment
	- initAipInvestment
	- subseqInvestment
	- subseqIraInvestment
	- subseqAipInvestment
	- brokerages
* topHoldings
	- maxAge
	- cashPosition
	- stockPosition
	- bondPosition
	- otherPosition
	- preferredPosition
	- convertiblePosition
	- holdings
	- equityHoldings
	- bondHoldings
	- bondRatings
	- sectorWeightings
* fundPerformance
	- maxAge
	- performanceOverview
	- performanceOverviewCat
	- trailingReturns
	- trailingReturnsNav
	- trailingReturnsCat
	- annualTotalReturns
	- pastQuarterlyReturns
	- riskOverviewStatistics
	- riskOverviewStatisticsCat
