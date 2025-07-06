import { useState } from "react"

const Form = () => {
    const [name,setName] = useState("");
    const handleChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Form submitted with name:", name);
        setName("");
    }
  return (
    <div>
      <main>
        <h1>Student Form</h1>
        <label htmlFor="Name" >Name: </label>
        <input type="text" placeholder="name" value={name} onChange={handleChange}></input>
      </main>
      <button onSubmit={handleSubmit}>Submit</button>
    </div>
  )
}

export default Form
