import ToDo from "../ToDo/ToDo"
import { ITask } from "@/types/tasks";

interface TodoListProps {
  tasks: ITask[];
}

const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available.</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <ToDo key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
