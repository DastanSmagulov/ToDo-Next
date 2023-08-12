import axios from "axios"
const baseUrl = "http://localhost:1337/api/to-dos";


const getAllToDos = async () =>
  await axios
    .get("http://localhost:1337/api/to-dos")
    .then((res) => Object.entries(res.data));

export default getAllToDos;