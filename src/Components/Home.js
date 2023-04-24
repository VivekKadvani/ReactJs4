import React from 'react'
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';

const Home = () => {
  const [ state, setNo] = useState(5);
  const[ data, setData] = useState([]);
  useEffect(() => {
    async function getData(){
      const dataR = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const res= await dataR.json();
      setData(res)
      // console.log(res)
    }
    
    getData()
    document.title=(`${state} employee`)
      
  },[state])
  

return (
  <div className="App">
    <button className='btn' onClick={()=>setNo(state+5)}>Get Data More</button>   
    <div>
       
  {
    data.map((e,index)=>{
      return(
        <div key={index}>
        <Link to={`/home/${e.id}`}>
          <h4>{e.id}</h4>
          <h4>{e.firstName}</h4>
          <h4>{e.age}</h4>
          <h4>{e.email}</h4>
        </Link>
        </div>
      )
    })
  }
    </div>
  </div>
);
}
export default Home