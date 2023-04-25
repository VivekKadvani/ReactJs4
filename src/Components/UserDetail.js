import { useParams ,useSearchParams} from 'react-router-dom';

const UserDetail = () => {
  const [search , setSearchParam] = useSearchParams();
const Name=search.get('name')
const Age = search.get('age')
const reset = () =>{
  setSearchParam({name :  'vivek',age:'22'})
}
  const { userId } = useParams();

  return (
    <div>User ID: {userId}<br/>
          name :{Name}<br/>
          age:{Age}<br/>
    <button onClick={reset}>reset</button></div>
  );
};

export default UserDetail