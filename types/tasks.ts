interface ITaskAttributes {
  text: string;
}

interface ITask {
  id: number;
  attributes: ITaskAttributes;
}

interface ITaskResponse {
  data: ITask[];
}

export type { ITask, ITaskResponse };
