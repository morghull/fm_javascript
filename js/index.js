/**
 * 
 * @param {function} howSay 
 * @param {string} whatSay 
 */
function saySomething(howSay, whatSay) {
  howSay(whatSay);
}

saySomething(console.log,'some');
