import './App.css';
import {useDispatch, useSelector} from "react-redux";


function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    console.log(cash)

    const addCash = (cash) => {
        dispatch({type: "ADD_MONEY", payload: cash})
    }
    const getCash = (cash) => {
        dispatch({type: "GET_MONEY", payload: cash})
    }

    return (
        <div className="App py-10">
            <div className="text-white p-3 text-3xl">{cash}</div>
            <div className="flex justify-center ">
                <button onClick={() => addCash(Number(prompt()))}
                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                    Акча Кошуу
                </button>
                <button onClick={() => getCash(Number(prompt()))}
                        className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                    Акча Алуу
                </button>
            </div>
        </div>
    );
}

export default App;
