import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

const TodoComponent = () => {
  const dispatch = useDispatch();

  const todo = useSelector((state: any) => state.todos);

  console.log("todo", todo);

  const LoadingUI = () => <div>Loading...</div>;

  const ErrorUI = () => <div>Error...</div>;

  const TableUI = () => (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todo?.data?.map((item: any, index: number) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.completed ? "finished": "active"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div>
      <h1>Todo List</h1>
      { todo?.loading ? <LoadingUI /> : 
        todo?.error ? <ErrorUI /> : <TableUI />
      }
      <div>
        <Button
          variant="outline-secondary"
          onClick={() => {
            dispatch({ type: "REQUEST_LOADING" });
          }}
        >
          Get Remote API data
        </Button>
      </div>
    </div>
  );
};

export default TodoComponent;
