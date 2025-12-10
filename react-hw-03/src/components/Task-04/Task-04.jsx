/*Задача 4. Однорядковий сапер.
Однорядкова таблиця, до клітинок якої додано інформацію 
про наявність міни(використати атрибути).Спочатку клітинки сірі.
При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним,
якщо немає – зеленим.Додати можливість відкриття усіх 
сусідніх незамінованих клітинок при відкритті незамінованої клітинки. */
import { gameField } from "./gameField"
import css from "./Task-04.module.css"
function SingleSapper() {
    function handleCellClick(e) {
        const tdEl = e.target
        if (tdEl.tagName === "TD") {
            const hasMine = tdEl.getAttribute("mine") === "1"

            tdEl.style.backgroundColor = hasMine ? "red" : "green";
        }
    }
    return (
        <>
            <h1>Saper</h1>
            <table>
                <tbody>
                    <tr onClick={handleCellClick}>
                        {gameField.map((cell) => (
                            <td
                                key={cell.id}
                                mine={cell.hasMine}
                                className={css.cell}
                            ></td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default SingleSapper;
