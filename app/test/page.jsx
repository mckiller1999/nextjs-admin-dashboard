const TestPage = () => {
  const handleForm = async (formData) => {
    "use server";
    console.log(formData);
    const username = formData.get("username");
    console.log("hello", username);
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button type="">Send</button>
      </form>
    </div>
  );
};

export default TestPage;
