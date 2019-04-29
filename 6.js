const window = {};
window.add = (a, b) => {
  return a + b;
}

function tool (a, b) {
  console.log(this)
  return this.add(a,b);
}

function app() {
  console.log(tool.apply(this, arguments))
}

app(5,6)
