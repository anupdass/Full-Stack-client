import { useHistory } from "react-router";

const SingleOrder = (props) => {

  const{userName,name,price,email,_id} = props.order;

  const history = useHistory();

  const handledelete = ()=>{

      fetch(`http://localhost:8000/delete/${_id}`,{
          method:"DELETE",
      })
      .then(res => res.json())
      .then(data =>{
          alert('Delete Successfully');
          history.replace('/');
      });
  }
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{email}</td>
            <td><button onClick={handledelete} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default SingleOrder;