// set the stage by initializing a list of all suits and card names:
const cardList = ['Ace',"Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
const suitList = ['Hearts','Diamonds','Spades','Clubs'];

class Card {
    constructor(suit, value) {

        // assign suit with validation
        this.suit = suit.charAt(0).toUpperCase() + suit.slice(1);
        // if (!(this.suit in this.suitList)) {    //<==== don't understand why this does not work
        if (!(this.suit === "Hearts" || this.suit === "Diamonds" || this.suit === "Spades" || this.suit === "Clubs")) {
            throw "Choose a valid suit, example Hearts, Diamonds, Spades or Clubs"
        }
        
        // assign value with validation
        if (!(value >=0 && value <=13)) {
            console.log('Please enter a numeric value and if you want and if you want an Ace, type 1; for Jack, type 11, for Queen, type 12, for King, type 13.')
        } else 
            this.value = value;
        // assign name with a function
        this.name = this.cardName(value);

    };

    // name card from its value        
    cardName(value) {
        for (let [index,name] of cardList.entries()) {
            if (index + 1 === value) {
                return name
            };
        }; 
    };
    // print card attributes to console
    showCard() {
        console.log(`${this.name} of ${this.suit}`);
    };
};

class Deck {
    constructor() {
        this.cardDeck = []
        this.reset();
    }
    reset() {
        for (let suit of suitList) {
            for (let value = 1; value < 14; value++) {
                const card = new Card(suit,value)
                this.cardDeck.push(card);
            };
        };
    };
    shuffle() {
        let shuffledDeck = []
        for (let index = this.cardDeck.length - 1; index >= 0; index--) {
            let min = 0;
            let max = this.cardDeck.length;
            let which = Math.floor(Math.random() * (max - min)) + min;
            shuffledDeck.push(this.cardDeck[which]);
            this.cardDeck.splice(which,1);
        };
        this.cardDeck = shuffledDeck;
        console.log(this.cardDeck[10])
        return this;
    };
    dealRandomCard() {
        let min = 0;
        let max = this.cardDeck.length;
        let which = Math.floor(Math.random() * (max - min)) + min;
        let randomCard = this.cardDeck[which]
        this.cardDeck.splice(which,1);
        return randomCard
    };
};

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    };
    buildHand(deck,num) {
        for (let idx = 0; idx < num; idx++){
            let card = deck.dealRandomCard();
            this.hand.push(card);        
        };
    };
    takeCard(deck) {
        let card = deck.dealRandomCard();
        this.hand.push(card);   
        return this     
    };
    dropCard(which) {
        this.hand.splice(which,1);
        return this
    };
 };


const deck1 = new Deck();
deck1.shuffle().shuffle().shuffle();
const player1 = new Player('Bob');
console.log(player1);
player1.buildHand(deck1,5);
console.log(player1);
player1.takeCard(deck1);
console.log(player1);
player1.dropCard(2);
console.log(player1);






