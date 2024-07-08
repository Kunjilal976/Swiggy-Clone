const Contact = () => {
    return (
 
       <div className="contact">
        <form action="" className=".form ">
          <label htmlFor="">Name: </label>
          <input type="text" placeholder="Enter your name" required />
          <label htmlFor="">Email: </label>
          <input type="text" placeholder="Enter your email"  required/>
          <label htmlFor="">Name: </label>
          <textarea type="text" placeholder="Write your query" required />
          <button>submit</button>
        </form>
       </div>
   
    )
  };
  
  export default Contact;