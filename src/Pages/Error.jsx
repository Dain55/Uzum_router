import { Link } from "react-router-dom"

const Error = () => {
    return(
        <>
        <div className="mt-[50px] text-8xl flex justify-center">
            404
        </div>
        <div className="text-3xl  flex justify-center">
             <h1>Страница не было найдено</h1>
        </div>
        <div className="flex justify-center">
          <Link to="/">Вернутся на сервер</Link>
        </div>
        </>
    )
}

export default Error