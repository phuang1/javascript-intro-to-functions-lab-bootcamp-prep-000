function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log ('hello'.toUpperCase())
}

function logWhisper(string) {
  console.log ('HELLO'.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return ("I love you too.")
  } else if (string === "thirsty") {
    return ("I can\'t hear you!")
  } else if {string === ) {
    return ("Reading newspaper.")
  }
}
it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })