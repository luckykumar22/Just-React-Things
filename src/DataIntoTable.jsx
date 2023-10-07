import { useState } from "react";
import "./DataIntoTable.css";

const DataIntoTable = () => {
    const [data, setData] = useState({
        fname: "",
        sname: "",
        age: "",
      });
      const [inputArr, setInputArr] = useState([]);
    
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleAdd = () => {
        setInputArr([...inputArr, { ...data }]);
        setData({
          fname: "",
          sname: "",
          age: "",
        });
      };
    
      return (
        <div className="table">
          <input
            type="text"
            name="fname"
            value={data.fname}
            onChange={handleChange} 
            placeholder="First Name"
            autoComplete="off"
          />
          <input
            type="text"
            name="sname"
            value={data.sname}
            onChange={handleChange} 
            placeholder="Second Name"
            autoComplete="off"
          />
          <input
            type="text"
            name="age"
            value={data.age}
            onChange={handleChange}
            placeholder="Age"
            autoComplete="off"
          />
          <button onClick={handleAdd}>Add</button>
          <br />
          <br />
          <br />
          <table border={1} cellPadding={10}>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>Second Name</td>
                <td>Age</td>
              </tr>
              {inputArr.map((info, ind) => (
                <tr key={ind}>
                  <td>{info.fname}</td>
                  <td>{info.sname}</td>
                  <td>{info.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default DataIntoTable;
