async function test() {
  try {
    const res = await fetch('http://localhost:3001/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: 'a simple hello world component' })
    });
    const data = await res.json();
    console.log(data.code);
  } catch (e) {
    console.error(e.message);
  }
}
test();
