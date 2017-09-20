function validBraces(braces) {
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];
  for (let i = 0; i < braces.length; ++i) {
    if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{') {
      stack.push(braces[i]);
    } else {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] !== map[braces[i]]) return false;
      stack.pop();
    }
  }
  if (stack.length > 0) return false;
  return true;
}

console.log(validBraces('({}()[]{})'));
