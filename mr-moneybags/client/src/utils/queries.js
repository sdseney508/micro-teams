// Queries for Portfolio App
import { gql } from '@apollo/client';

// Query for the user
export const QUERY_ME = gql`
    query me {
        me {
            _id
            email
            portfolios {
                portfolioId
                portfolioName
                shares
                dailyPerf
                percChange
                percofPortfolio
                stock {
                    symbol
                    addedDate
                    purchasePrice
                    currentPrice
                    dayHigh
                    dayLow
                    YearHigh
                    YearLow
                    stockYTD 
                    sinceCreated
                }
            }
        }
    }
`;

// Query for ALL portfolios
export const QUERY_PORTFOLIOS = gql`
    query getPortfolios($portfolioId: String!) {
        getPortfolios(portfolioId: $portfolioId) {
            portfolioId
            portfolioName
            shares
            dailyPerf
            percChange
            percofPortfolio
            stock {
                symbol
                addedDate
                purchasePrice
                currentPrice
                dayHigh
                dayLow
                YearHigh
                YearLow
                stockYTD 
                sinceCreated
            }
        }
    }

`;

// Query for a single portfolio
export const QUERY_SINGLE_PORTFOLIO = gql`
    query getPortfolio($portfolioId: String!) {
        getPortfolio(portfolioId: $portfolioId) {
            portfolioId
            portfolioName
            shares
            dailyPerf
            percChange
            percofPortfolio
            stock {
                symbol
                addedDate
                purchasePrice
                currentPrice
                dayHigh
                dayLow
                YearHigh
                YearLow
                stockYTD 
                sinceCreated
            }
        }
    }

`;