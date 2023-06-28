// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
    // const response = await fetch('http://localhost"8080');
    // resolve({response});
  );
}
