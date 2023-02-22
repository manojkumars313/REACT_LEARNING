export const checkCapitalLetter = (str) => {
    // str = "12asdAv"
    for(let i = 0; i < str.length; i++) {
        if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90){
            return true;
        }
    }
    return false;
}