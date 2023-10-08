import { useState } from "react";
import "./DataIntoTable.css";

const ManipulateTable = () => {
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [inputArr, setInputArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setInputArr([...inputArr, formData]);
    setFormData({ name: "", number: "" });
  };

  const deleteData = (i) => {
    const updatedData = [...inputArr];
    updatedData.splice(i, 1);
    setInputArr(updatedData);
  };

  const updateData = (i) => {
    const { name, number } = inputArr[i];
    setFormData({ name, number });
    setCurrentIndex(i);
    setIsUpdating(true);
  };

  const updateInfo = () => {
    const updatedData = [...inputArr];
    updatedData[currentIndex] = formData;
    setInputArr(updatedData);
    setFormData({ name: "", number: "" });
    setCurrentIndex(null);
    setIsUpdating(false);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="number"
        name="number"
        value={formData.number}
        placeholder="Number"
        onChange={handleChange}
      />
      <button className="button" onClick={!isUpdating ? handleAdd : updateInfo}>
        {!isUpdating ? "Add data" : "Update data"}
      </button>
      <br />
      <br />
      <table border={1} cellPadding={10} width="100%">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Number</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
          {inputArr.map((info, i) => (
            <tr key={i}>
              <td>{info.name}</td>
              <td>{info.number}</td>
              <td>
                <button onClick={() => updateData(i)}>Update</button>
              </td>
              <td>
                <button onClick={() => deleteData(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManipulateTable;