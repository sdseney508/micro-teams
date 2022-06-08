import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
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
            portfolioName
        }
    }
`;

export const UPDATE_PORTFOLIO = gql`
    mutation updatePortfolio($_id: ID!, $stock: StockInput!) {
        updatePortfolio(_id: $_id, stock: $stock) {
            portfolioName
            stocks {
                name 
                purchasePrice
                shares
            }
        }
    }
`;

export const DELETE_STOCK = gql`
    mutation deleteStock($_id: ID!, $name: String!) {
        deleteStock(_id: $_id, name: $name) {
            stocks {
                name
                purchasePrice
                shares
            }
        }
    }
`;