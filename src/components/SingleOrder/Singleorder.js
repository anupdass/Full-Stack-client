import { useHistory } from "react-router";

const SingleOrder = (props) => {

  const{userName,name,price,email,_id} = props.order;

  const history = useHistory();

  const handledelete = ()=>{

      fetch(`https://cryptic-waters-27310.herokuapp.com/delete/${_id}`,{
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