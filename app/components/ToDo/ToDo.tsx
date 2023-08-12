"use client";

import { ITask } from "@/types/tasks";

interface TaskProps {
  task: ITask;
}

const ToDo: React.FC<TaskProps> = ()=>{
    return(
        <h1>Task</h1>
    )
}
export default ToDo;
