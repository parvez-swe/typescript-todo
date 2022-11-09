import "./style.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputFeild:React.FC<props> = ({todo,setTodo}) => {

  return (
    <form className="input">
      <input type="input" value={todo} onChange={e=>setTodo(e.target.value)} placeholder="Enter a task" className="input__box" />
      <button className="input__submit">Go</button>
    </form>
  );
};

export default InputFeild;
