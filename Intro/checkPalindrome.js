function checkPalindrome(inputString) {
    
    let characterArray = inputString.split("");
    let reverseArray = [];
    let possiblePalindrome = "";
    
    characterArray.forEach(function(char){ 
        reverseArray.unshift(char);
    });
    
    reverseArray.forEach(function(char){
        possiblePalindrome = possiblePalindrome + char;       
    });
    
    if (possiblePalindrome === inputString) {
        return true;
    } else {
        return false;
    }
}
