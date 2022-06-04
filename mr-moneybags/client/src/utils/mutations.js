import { gql } from '@apollo/client';


// token
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                email
                password
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!) {
        addUser(email: $email, password: $password) {
            user {
                _id
                email
                password
            }
        }
    }
`;

export const ADD_PORTFOLIO = gql`
    mutation addPortfolio($portfolioName: String!) {
        addPortfolio(portfolioName: $portfolioName) {
            portfolioId
            portfolioName
            stock
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
`