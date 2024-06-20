/*Input: "hello world #FirstTweet"
Output: ["firsttweet"]
Explanation: For "hello world #FirstTweet", the hashtag "#FirstTweet" is extracted, converted to lowercase, and returned in an array.

Input: "Enjoying the #sunshine #SummerVibes #Sunshine"
Output: ["sunshine", "summervibes"]
 */

function extractHashtags (caption){
    let word = caption.split(" ");
    let result = word.filter((word)=>{
        return word.startsWith("#")
    })
    const uniqueHagsh = [...new Set(result.map(result=>result.slice(1).toLowerCase()))]
    const updated = uniqueHagsh.join()
    if(updated.length !== 0){
        return updated
    }
    else {
        return "No hashtags here!"
    }
    }
console.log(extractHashtags("Enjoying the sunshine SummerVibes Sunshine"))