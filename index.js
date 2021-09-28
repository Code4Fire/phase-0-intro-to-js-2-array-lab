// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"];
    
    function destructivelyAppendCat(Ralph) {
        cats.push("Ralph");
        return cats;
    }
    function destructivelyPrependCat(Bob) {
        cats.unshift("Bob");
    }
    function destructivelyRemoveLastCat() {
        cats.pop();
    }
    function destructivelyRemoveFirstCat() {
        cats.shift();
    }
    function appendCat(Broom)   {
        let copyCats= [...cats, "Broom"];
        return copyCats;
       }
    function prependCat(Arnold) {
        let copyCats= ["Arnold", ...cats];
        return copyCats;
       }
    function removeLastCat()   {
        let copyCats= cats.slice(0, cats.length-1);
        return copyCats;
       }
    function removeFirstCat() {
        let copyCats= cats.slice(1);
        return copyCats;
       }
