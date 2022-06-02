import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!) {
        addUser(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const ADD_PORTFOLIO = gql`
    mutation addPortfolio($portfolioName: String!) {
        addPortfolio(portfolioName: $portfolioName) {
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
`