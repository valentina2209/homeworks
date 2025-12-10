/* Задача 1. Вводимо логіна і пароль.Якщо логін вірний відображаємо смайл.Якщо ні, то:
1) якщо логін = Іван – колір повідомлення про помилку синій
2) якщо хтось інший, то колір повідомлення червоний */

import { useState } from "react";

function LoginCheck() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(null);

    const correctLogin = "admin"

    const handleLogin = () => {
        if (login === correctLogin) {
            setStatus("success")
        } else {
            setStatus("error")
        }
    }

    const getErrorColor = () => {
        return login === "Іван" ? "blue" : "red"
    }

    const handleChangeLog = (e) => {
        setLogin(e.target.value)
    }

    const handleChangePass = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div style={{ fontFamily: "Arial", padding: "20px " }}>

            <label> Логін: </label>
            <input
                type="text"
                value={login}
                onChange={handleChangeLog}
            />

            <label> Пароль: </label>
            <input
                type="password"
                value={password}
                onChange={handleChangePass}
            />

            <button style={{ marginTop: "15px" }} type="submit" onClick={handleLogin}>
                Увійти
            </button>

            {status === "success" && (
                <p style={{ fontSize: "30px", marginTop: "15px" }}>😊</p>
            )}

            {status === "error" && login.trim() !== "" && (
                <p style={{ color: getErrorColor(), marginTop: "15px " }}>
                    Невірний логін!
                </p>
            )}

        </div>
    )
}

export default LoginCheck;
