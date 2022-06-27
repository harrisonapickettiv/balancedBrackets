const resetDisplay = () => {
  const errorMessage = document.getElementById("error");
  const result = document.getElementById("result");

  errorMessage.setAttribute("hidden", true);
  errorMessage.setAttribute("aria-hidden", true);
  result.setAttribute("aria-hidden", true);
  result.setAttribute("hidden", true);
  result.innerHTML = "";
};

const getValues = () => {
  const brackets = document.getElementById("brackets").value;
  const validInput = typeof brackets === "string" || brackets instanceof String;

  return { error: !validInput, brackets };
};

const displayError = () => {
  const errorMessage = document.getElementById("error");

  errorMessage.removeAttribute("hidden");
  errorMessage.removeAttribute("aria-hidden");
};

const checkBracket = (stack, check) => {
  return stack[stack.length - 1] === check;
};

const checkBalanced = (brackets) => {
  const openBrackets = [];
  for (const ch of brackets) {
    switch (ch) {
      case "{":
        openBrackets.push(ch);
        break;
      case "}":
        if (checkBracket(openBrackets, "{")) {
          openBrackets.pop();
        } else {
          return false;
        }
        break;
      case "[":
        openBrackets.push(ch);
        break;
      case "]":
        if (checkBracket(openBrackets, "[")) {
          openBrackets.pop();
        } else {
          return false;
        }
        break;
      case "(":
        openBrackets.push(ch);
        break;
      case ")":
        if (checkBracket(openBrackets, "(")) {
          openBrackets.pop();
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  }

  return openBrackets.length === 0;
};

const displayResult = (balanced) => {
  const result = document.getElementById("result");

  if (balanced) {
    result.innerHTML = `<h2>Brackets are balanced</h2>`;
  } else {
    result.innerHTML = `<h2>Brackets are <strong>NOT</strong> balanced<h2>`;
  }

  result.removeAttribute("hidden");
  result.removeAttribute("aria-hidden");
};

const brackets = () => {
  resetDisplay();
  const { brackets, error } = getValues();
  if (error) return displayError();
  const balanced = checkBalanced(brackets);
  displayResult(balanced);
};

export { brackets };
