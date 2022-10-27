// all done by both of us
const raisinAlarm = function(cookie) {
  // Put your solution here
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin Alert!!!";
    }
  }
  return "All Good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍇", "🍇", "🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  // Put your solution here
  //done by @ruheee from here
  const answer = [];
  for (let i = 0; i < cookies.length; i++) {
    for (let j = 0; j < cookies[i].length; j++) {
  // to here
  // done by Di Lu from here
      if (cookies[i][j] === "🍇") {
        answer.push("Raisin alert!");
        i++;
        j = 0;
      }
    } answer.push("All good!");
  } return answer;
};
//to here


console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
    ["🍇", "🍇", "🍫", "🍫", "🍫"]
  ])
);