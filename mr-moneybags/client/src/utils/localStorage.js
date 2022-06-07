export const getSavedPortNames = () => {
    const savedPortNames = localStorage.getItem('saved_portfolios')
        ? JSON.parse(localStorage.getItem('saved_portfolios'))
        : [];
    
    return savedPortNames;
};

export const savedPortName = (portfolioNameArr) => {
    if (portfolioNameArr.length) {
        localStorage.setItem('saved_portfolios', JSON.stringify(portfolioNameArr))
    } else {
        localStorage.removeItem('saved_portfolios')
    }
};

export const deletePortName = (portfolioName) => {
    const savedPortNames = localStorage.getItem('saved_portfolios')
        ? JSON.parse(localStorage.getItem('saved_portfolios'))
        : null;
    
    if (!savedPortNames) {
        return false;
    }
    const updatedSavedPortName = savedPortNames?.filter((savedPortName) => savedPortName !== portfolioName);

    localStorage.setItem('saved_portfolios', JSON.stringify(updatedSavedPortName));

    return true;
}
