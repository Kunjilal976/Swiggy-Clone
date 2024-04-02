const Contact = () => {
    return (
      <div class="containerA">
        <form action="submit_form.php" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" required/>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
    )
  };
  
  export default Contact;