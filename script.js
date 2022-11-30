// put your globals here - hint: select elements from the HTML

// dont' forget to add event listeners to teh buttons

/*function countWords(str) {}*/
function countWordsString() {
  var textAreaEl = document.getElementById("text-area");
  var inputValue = textAreaEl.value;
  inputValue = inputValue.replace(/\s+/gi, " ");
  var data = inputValue.split(" ").length;
  var wordCountInputEl = document.getElementById("wordCountInput");
  // call printData
  printData(data + " words", wordCountInputEl);
}

function findWords() {
  // put your local variable for the empty array here
  var foundwords = [];
  // remainder of your code follows
  var textAreaEl = document.getElementById("text-area");
  var inputValue = textAreaEl.value;
  inputValue = inputValue.replace(/\s+/gi, " ");
  var data = inputValue.split(" ");

  var textAreaEl = document.getElementById("findWordInput");
  var typeWord = textAreaEl.value;
  typeWord = typeWord.replace(/\s+/gi, "");
  data.forEach(function (item) {
    if (typeWord == item) {
      foundwords.push(item);
    }
  });
  // call printData
  printData(
    foundwords.length + " instances",
    document.getElementById("wordFoundInput")
  );
}

// change param1 and param2 to identifiers that make sense
function printData(data, des) {
  // your code here... one line!
  des.value = data;
}
