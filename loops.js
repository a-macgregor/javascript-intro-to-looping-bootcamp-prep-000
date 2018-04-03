function forLoop (let i = 0; i < 25; i++) {
  if (i === 1) {
    forLoop.push("I am 1 strange loop");
  } else {
    forLoop.push(`I am ${i} strange loop`);
  }
}

return forLoop;