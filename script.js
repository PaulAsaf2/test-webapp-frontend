async function test() {
  throw new Error('ALARM!');
}

async function f() {
  try {
    await test();
  } catch (err) {
    console.error(err);
  }

  console.log('Bla!');
}

f();