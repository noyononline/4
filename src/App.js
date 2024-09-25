
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const fatchResult = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=100');
        setUsers(response.data.results);
        console.log(response.data.results);
        
      } catch (err) {
        console.log(err);
        
      } finally {
        setLoading(false);
      }
    }
    fatchResult()

  }, []);

  if (loading) return <p className='text-2xl font-bold pb-5 text-center flex justify-center'>Loading...</p>;

  return (
    <div className='w-[70%] mx-auto py-10'>
      <h1 className='text-3xl font-bold pb-5 text-center'>Random Users</h1>
      <table className='border w-full'>
      <tr className='flex px-5 my-7 w-full text-lg font-bold border-b'>
            
            
            
            <td className='w-3/12'>Image</td>
            <td className='w-4/12'><p>Full Name</p></td>
            <td className='w-5/12'><p>Email</p></td>
          </tr>
      {users.map((user, number) => (
        <tr key={number} className='flex px-5 my-7 w-full border-b'>
            
            
            
          <td className='w-3/12'><img src={user.picture.thumbnail} alt={`${user.name.first}`} /></td>
          <td className='w-4/12'><p>{`${user.name.first} ${user.name.last}`}</p></td>
          <td className='w-5/12'><p>{user.email}</p></td>
        </tr>
        ))}
      </table>
    </div>
  );
};

export default App;

