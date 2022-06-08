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
                stocks {
                    name 
                    purchasePrice
                    shares
                }
            }
        }
    }
`;

// Query for ALL portfolios but this should query the user not portfolios
export const QUERY_PORTFOLIOS = gql`
    query getPortfolios($portfolioName: String!) {
        getPortfolios(portfolioName: $portfolioName) {
            portfolioName
            stocks {
                name 
                purchasePrice
                shares
            }
        }
    }

`;

// Query for a single portfolio
export const QUERY_SINGLE_PORTFOLIO = gql`
query getPortfolio($_id: ID!) {
    getPortfolio(_id: $ID) {
            portfolioName
            stocks {
                name 
                purchasePrice
                shares
            }
        }
    }

`;