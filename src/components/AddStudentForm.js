import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import  "react-toastify/dist/ReactToastify.css";
import '../index.css'

const Create  = () => {
const [data, setData] = useState({
    firstname: "", 
    lastname: "", 
    gender: ""
});

const handleChange=(e) => {
    const {name, value} = e.target;
    setData((prev)=>{
    return {...prev, [name] : value};
    })
}

const handleSubmit=(e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/", data) //use our own custom Api for our DB to add students to the DB
    .then(res=>{
    toast.success("New student added sucessfully", 
    {position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000
    })
    })
    .catch(err=>{
    toast.error("Error adding new student",
    {position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000
    })
    })
}

return(
<div className="student-form">
<form onSubmit={handleSubmit}>
   {/* firstname */}
    <div className="firstname-input">
    <label>First Name</label><br/>
    <input type="text" required name="firstname" value={data.firstname} onChange={handleChange}/><br/>
    </div>
     {/* lastname */}
    <div className="lastname-input">
    <label>Last Name</label><br/>
    <input type="text" required name="lastname" value={data.lastname} onChange={handleChange}/><br/>
    </div>
     {/* gender */}
    <div className="gender-input">
    <label>Gender</label> <br/>
    <input type="text" required name="gender" value={data.gender} onChange={handleChange}/>
    </div>
     {/* submit button */}
    <div className="btn">
    <button>Add Student</button>
    <ToastContainer/>
    </div>
</form>
</div>
)
};
export default Create;