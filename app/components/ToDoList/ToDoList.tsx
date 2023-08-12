import ToDo from "../ToDo/ToDo"
import { ITask } from "@/types/tasks";

interface ToDoListProps {
  tasks: ITask[];
}

const ToDoList: React.FC<ToDoListProps> = ({tasks}) => {
  console.log(tasks)
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
