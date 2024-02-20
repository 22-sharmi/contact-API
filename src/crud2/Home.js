import axios from "axios"
import { useEffect, useState } from "react"
// import { API } from "../crud/API"
import { Link } from "react-router-dom"
import { Mongo } from "../GoogleContact/Mongo"
// import'../src/App.css'; 
import './Home.css'
import { FaEdit, FaTrash } from "react-icons/fa";
import { API } from "../GoogleContact/API"
// export default function Home(props){ 
export default function Home(){ 
    // const {b}=props;
    const[Name,SetName]=useState([])
    const EditIcon = () => <FaEdit />;

    const DeleteIcon = () => <FaTrash />;
    useEffect(()=>{
        // axios.get(Mongo).then((y)=>{
        axios.get(API).then((y)=>{
            console.log(y.data);
            SetName(y.data);
        })
    },[])
    function d(a){
        // axios.delete(`http://localhost:222/${a}`).then(()=>{
        axios.delete(`https://65894e01324d41715258bc2b.mockapi.io/contact/${a}`).then(()=>{
            axios.get(API).then((y)=>{
                console.log(y.data);
                SetName(y.data);
            }) 
        })
        console.log(a);
    }
    function Edit(id,Name,Phone,DOB,Email){
        localStorage.setItem('id',id)
        localStorage.setItem('Uname',Name)
        localStorage.setItem('email',Email)
        localStorage.setItem('PhNum',Phone)  
        localStorage.setItem('dob',DOB)
    }
    // function Edit(id,Name,Phone,DOB,Email){
    //     localStorage.setItem('_ID',id)
    //     localStorage.setItem('Name',Name)
    //     localStorage.setItem('Email',Email)
    //     localStorage.setItem('Phone',Phone)  
    //     localStorage.setItem('date',DOB)
    // }
//     const [selectedOption, setSelectedOption] = useState('');
//   const handleDropdownChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
const [isDropdownVisible, setDropdownVisible] = useState();

  function toggleDropdown(){
    setDropdownVisible(!isDropdownVisible)
  };
//   const closeDropdown = () => {
//     setDropdownVisible(false);
//   };
  function print(){
    window.print()
  };
    return(
        <>
        <div className="container text-center">
        <div className="table-responsive">
            <table className="table">
                <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Date Of Birth</th>
                    <th>Actions</th>
                    {/* <th>EDIT</th>
                    <th>DELETE</th> */}
                </tr>
                <br/>
{Name.map((r)=>(
    <tr>
        {/* <td>
            {r._id}
        </td> */}
        <td>
            {r.Uname}
        </td>
        <td>
            {r.email}
        </td>
        <td>
            {r.PhNum}
        </td>
        <td>
            {r.Dob}
        </td>
           
        <td className="">
                 <Link to="/edit">
                  <button className="btn btn-white" onClick={(()=>Edit(r.id,r.Uname,r.PhNum,r.dob,r.email))}> <EditIcon /> </button>
                  
                 </Link>
                    <button className="btn btn-white" onClick={(()=>d(r.id))}><DeleteIcon/></button>
                
               </td>    
    </tr>
))}
            </table>
        </div>
        </div>
        </>
    )
}