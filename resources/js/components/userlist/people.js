import React, {useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import Table from './table';
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
       
     });
}
     return (
        <Table list = {list}></Table>
     );
}

export default People;