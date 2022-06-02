// Queries for Portfolio App
import { gql } from '@apollo/client';

// Query for the user
export const QUERY_ME = gql`
    query me {
        me {
            _id
            email
            portfolios {
                _id
                portfolioName
                shares
                dailyPerf
                %Change
                %ofPortfolio
                stock {
                    symbol
                    addedDate
                    purchasePrice
                    currentPrice
                    dayHigh
                    dayLow
                    52WeekHigh
                    52WeekLow
                    stockYTD 
                    sinceCreated
                }
            }
        }
    }
`;

// Query for ALL portfolios
export const QUERY_PORTFOLIOS = gql`
    query portfolio($portfolioId: ID) {
        portfolio(portfolioId: $portfolioId) {
            _id
            portfolioName
            shares
            dailyPerf
            %Change
            %ofPortfolio
            stock {
                symbol
                addedDate
                purchasePrice
                currentPrice
                dayHigh
                dayLow
                52WeekHigh
                52WeekLow
                stockYTD 
                sinceCreated
            }
        }
    }

`;

// Query for a single portfolio
export const QUERY_SINGLE_PORTFOLIO = gql`
    query getPortfolios {
        portfolios {
            _id
            portfolioName
            shares
            dailyPerf
            %Change
            %ofPortfolio
            stock {
                symbol
                addedDate
                purchasePrice
                currentPrice
                dayHigh
                dayLow
                52WeekHigh
                52WeekLow
                stockYTD 
                sinceCreated
            }
        }
    }

`;