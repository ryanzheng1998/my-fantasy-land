function b(a: number) {
  console.log(a)
}

function a() {
  b(this, 3)
}

a()
