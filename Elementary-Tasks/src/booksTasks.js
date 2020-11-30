// friends=["sdasdl", "asd", "asd", "asd", "asd", "asda"]
// for (let i in friends){
//   $("body").append("<p>" + friends[i] + "</p>");
// }
// $("h1").text("Мои друзья");
// $("p").append(" лучший").hide().fadeIn(5000)
// let time = 1000
// for (let i=0; i<5; i++){
//   $("h1").fadeOut(time).fadeIn(time);
//   time+=1000
// }
// $("h1").fadeOut(2000).delay(5000).fadeIn(500);
// $("h1").fadeTo(2000, 0.2);

// let leftOffset = 0;
// let moveHeading = () =>{
//   $("h1").offset({left:leftOffset});
//   leftOffset+=2
//   if (leftOffset>300){
//     leftOffset= 0;
//   }
// }
// setInterval(moveHeading, 30);

// let clickHandler=(event)=>{
//   console.log("Клик! " + event.pageX + " " + event.pageY)
// }

// $("h1").click(clickHandler);
// $("html").mousemove(function(event){
//   $("h1").offset({left: event.pageX, top: event.pageY});
// });

let sentenses = "Alena has her, ываыаа ыва, ываыва ываа"
let longestWord=(str)=>{
  text=str.split(" ")
  let length2=0
  let word= ""
  for (let i in text){
    lengthWord1=text[i].length
    if(lengthWord1>length2){
    word=text[i]
    length2=lengthWord1
    }
  }
  return word
}
// console.log(longestWord(sentenses));
//////////////////////////////////////////////////////////////

let changeWordsOrder=(str)=>{
  let strArray = str.split(" ");
  let a = strArray.sort(function(a, b) {
    return  a.length - b.length;
  });
    return a.join(" ")
  };

//   console.log(changeWordsOrder(sentenses))
