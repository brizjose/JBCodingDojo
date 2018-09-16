function ETF(ticker, rsi,pctR) {
    this.ticker = ticker;
    this.rsi = rsi;
    this.pctR = pctR;
};

ETF.prototype.rate = function() {
    this.rating = this.rsi + this.pctR;
    // console.log(this.rating);
    return this;   
};

function rate_etfs() {
    for (i = 0; i < etfs.length; i++) {
        etfs[i].rate();
    }
};

function investability(ticker) {
    var investability_rating = ticker.rating;
    if (investability_rating >= 60) {
        console.log(ticker.ticker+' is investable');
    } else {
        console.log(ticker.ticker+' is not investable');
    }
    return investability_rating;
};


function recommendations(etfs, callback) {
    for (let i = 0; i < etfs.length; i++) {
        // console.log(etfs[i], etfs[i].rating)
        callback(etfs[i]);
    }
};


//this process built the initial database
var EWG = new ETF('EWG', 50, -69);
var XLF = new ETF('XLF', 66, -28);
var XLB = new ETF('XLB', 59, -36);
var XLY = new ETF('XLY', 77, -1);
var XLI = new ETF('XLI', 68, -13);
var SPY = new ETF('SPY', 75, -1);

var etfs = [EWG, XLF, XLB, XLY, XLI, SPY];


//run this process to update the array of stocks in the database
let XME = new ETF('XME', 52.42, -49.66);
etfs.push(XME);


//run this process to update technicals of the stocks
// XLF.rsi=90;


//run this process to rate all ETFS
rate_etfs();


//run this process to issue recommendations
recommendations(etfs, investability);


//get all investable tickers
function investable() {
    const investables = []
    for (var i = 0; i < etfs.length; i++) {
        if (etfs[i].rating > 60) {
            investables.push(etfs[i]);
        }
    }
    return investables
}

// console.log(investable());

return (XLF,investability);