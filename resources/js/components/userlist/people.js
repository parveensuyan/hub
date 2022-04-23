import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
function People(){
     const [state, setData] = useState({
         users: [],
     });
     const fetchData = async () => {
         const api = await fetch("/api/people");
         setData({
             users: await api.json(),
         });
     };

     useEffect(() => {
         fetchData();
     }, []);
      const list = [];
      let i = 0;
      console.log(state.users.results);
if (state.users.results !=undefined){
    
     state.users.results.forEach((product,key) => {

         list.push(
             <tr key={key}>
                 <th scope="row">
                     {product.name}
                 </th>
                 <td> {product.birth_year}</td>
                 <td>{product.gender}</td>
                 <td>{product.height}</td>
             </tr>
         );
         i++;
     });
// console.log(list);
// console.log(state.users.results);
}
   
     return (
         <div>
             <table className="table">
                 <thead className="thead-dark">
                     <tr>
                         <th scope="col">Name</th>
                         <th scope="col">DOB</th>
                         <th scope="col">Gender</th>
                         <th scope="col">Height</th>
                     </tr>
                 </thead>
                 <tbody>{list}</tbody>
             </table>
         </div>
     );
}

export default People;