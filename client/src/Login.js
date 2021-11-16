function Login() {
  // function handleSubmit(event) {
  //     event.preventDefault();
  //     fetch("http://localhost:8000/jokes", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         setup: formData.setup,
  //         delivery: formData.delivery,
  //         category: formData.category,
  //       }),
  //     })
  //       .then((response) => response.json())

  //       .then((newJoke) => sendNewJoke(newJoke));
  //     setFormData({
  //       category: "",
  //       setup: "",
  //       delivery: "",
  //     });
  //   }

  return (
    <div>
      <h3>Username</h3>
      <form>
        <input type="text" />
      </form>
      <h3>Password</h3>
      <form>
        <input type="password" minlength="8" required />
      </form>
      <button type="submit">
        Submit
      </button>
    </div>
  );
}

export default Login;
