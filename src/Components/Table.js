import React, {useState,useEffect} from 'react';

const Table = ({data,setData,setEditIndex}) => {  
  const [submissions,setSubmissions] = useState([]);
  console.log(data);

  useEffect(()=> {
  setSubmissions(data);
  },[data]);

  const handleEdit = (index) => {
        setEditIndex(index);
  };

  const handleDelete = (index) => {
    console.log(index);
    const updatedSubmissions = [...submissions];
    updatedSubmissions.splice(index, 1);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    setData(updatedSubmissions);
  };
 
  return(
    <table className=" bg-rose-50 border border-green-500 shadow-lg">
      <thead>
        <tr>
          <th className="py-2 px-4 border border-green-500 text-red-500">First Name</th>
          <th className="py-2 px-4 border border-green-500 text-red-500">Last Name</th>
          <th className="py-2 px-4 border border-green-500 text-red-500">Phone Number</th>
          <th className="py-2 px-4 border border-green-500 text-red-500">Email</th>
          <th className="py-2 px-4 border border-green-500 text-red-500">Gender</th>
          <th className="py-2 px-4 border border-green-500 text-red-500">Date of Birth</th>
          <th className="py-2 px-4 border border-green-500 text-red-500">City</th>
          <th className="py-2 px-4 border border-green-500 text-red-500">State</th>
          <th className="py-2 px-4 border border-green-500 text-red-500">Actions</th>
        </tr>
      </thead>
      <tbody>
        {submissions?.map((submission, index) => (
          <tr key={index}>
            <td className="py-2 px-4  text-green-500">{submission.firstName}</td>
            <td className="py-2 px-4  text-green-500">{submission.lastName}</td>
            <td className="py-2 px-4  text-red-500">{submission.phoneNumber}</td>
            <td className="py-2 px-4  text-red-500">{submission.email}</td>
            <td className="py-2 px-4  text-red-500">{submission.gender}</td>
            <td className="py-2 px-4  text-red-500">{submission.dateOfBirth}</td>
            <td className="py-2 px-4  text-red-500">{submission.city}</td>
            <td className="py-2 px-4  text-red-500">{submission.state}</td>
            <td className="py-2 px-4  text-red-500">
              <button
                className=" bg-green-300 rounded-md mr-2 text-blue-500 hover:text-cyan-950 shadow-md"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className=" bg-red-500 rounded-md text-white hover:text-red-700 shadow-lg"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
