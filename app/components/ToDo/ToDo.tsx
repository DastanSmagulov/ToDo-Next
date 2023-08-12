"use client";

import { ITask } from "@/types/tasks";

interface TaskProps {
  task: ITask;
}

const ToDo: React.FC<TaskProps> = ({task})=>{
    return(
        <h1>{task.text}</h1>
    )
}
export default ToDo;
