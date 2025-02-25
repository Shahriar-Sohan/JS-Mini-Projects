const below20 = ["","one","two","three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
const belowHundred = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"]
const infinit = ["","Hundred","Thousand","Million","Billion","Trillion"]


function numberToWord(num){
   
    function numberLogic(num){
        if(num < 20){
            return (below20[num])

        }
        if(num > 19 && num < 100 ){
            let tens = belowHundred[Math.floor(num / 10)]
            let ones  = below20[num % 10]
            return tens+" "+ones
        }
        if(num >= 100 && num < 1000){
            //one hundred and one
            let hundred = numberLogic(Math.floor(num / 100)) + " " + infinit[1]
            let tenAndOne = numberLogic(Math.floor(num % 100))
            if(num % 100 === 0){
                return(hundred)
            }else{
                return(hundred+" and "+tenAndOne)
            }
        }
        if(num >= 1000 && num < 100000){
            //one hundred and one
            let thousand = numberLogic(Math.floor(num / 1000)) + " " + infinit[2]
            let hundred = numberLogic(Math.floor(num / 100)) + " " + infinit[1]
            let tenAndOne = numberLogic(Math.floor(num % 100))
            if(num % 1000 === 0){
                return(thousand)
            }else{
                return(thousand + hundred+" and "+tenAndOne)
            }
        }
        
    }
        
        
    
    if(num === 0){
        console.log("Zero")
    }

    if(num < 20){
        console.log(numberLogic(num))
    }
    
    if(num > 19 && num < 100 ){
        console.log(numberLogic(num))
    }

   
    if(num >= 100 && num < 1000){
        console.log(numberLogic(num))   
    }

    if(num >= 1000 && num < 100000){
        console.log(numberLogic(num))  
    }
   
}




numberToWord(1010);




