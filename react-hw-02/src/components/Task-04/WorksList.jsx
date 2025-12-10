/*  Вивести список як маркований список з елементами у форматі (name: salary) */
import { workersList2 } from "./workers";

function WorksList() {
    return (
        <ul>
            {workersList2.map((worker) => (
                <li key={worker.id}>
                    {`${worker.name}: ${worker.salary}`}
                </li>
            ))}
        </ul>
    )
}

export default WorksList;


