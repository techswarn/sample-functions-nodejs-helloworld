function main(args) {
  let name = args.name || "stranger";
  let greeting = "Hello " + name + "!";
  console.log(greeting);
  try {
    fetch("https://apps.techenv.dev/api/v1/") // api for the get request
      .then((response) => {
        response.json();
        console.log(response.json());
      })
      .then((data) => {
        console.log(data);
        return { body: { success: true, data: data }, headers: { foo: "bar" } };
      });
  } catch (err) {
    console.log(err);
    return { body: { success: false, data: err }, headers: { foo: "bar" } };
  }
}

exports.main = main;
