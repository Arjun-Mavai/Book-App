# TypeError: Failed to execute 'json' on 'Response': body stream already read
    at Object.fetchBooks [as queryFn] (Book.jsx:9:14)


how it resolved : 

# issue 
const fetchAuthor = async () => {
  const res = await fetch("http://localhost:5000/authors");
  if (!res.json()) {  // <-- First call to .json()
    throw new Error("Error while fetching the authors");
  }

  return res.json();  // <-- Second call to .json()
};

# Ensure that you only read the Response object's body once. If you need to use the data in multiple places, store it in a variable first.

JavaScript, a Response object's body stream can only be read once. If you try to read it again, it will throw this error.
You are calling .json() or .text() on the same Response object multiple times.
You are using the same Response object in multiple places and trying to read its body in each place.

# resolved
const fetchAuthor = async () => {
  const res = await fetch("http://localhost:5000/authors");
  const data = await res.json();  // <-- Only one call to .json()

  if (!data) {
    throw new Error("Error while fetching the authors");
  }

  return data;
};

