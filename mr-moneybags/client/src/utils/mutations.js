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
            portfolioName
        }
    }
`

export const UPDATE_PORTFOLIO = gql`
    mutation updatePortfolio($portfolioName: String!) {
        updatePortfolio(portfolioName: $portfolioName) {
            portfolioName
            stocks: [{
                name: String!
                purchasePrice: Float!
                shares: Int!
            }
            ]
        }
    }
`
// TODO figure out how to delete a single stock object from a specific portfolio
export const DELETE_STOCK = gql`
    mutation deleteStock($name: String!) {
        deleteStock(name: $name) {
            stocks: [{
                name: String!
                dateAdded: String!
                purchasePrice: Float!
                shares: Int!
            }
            ]
        }
    }
`