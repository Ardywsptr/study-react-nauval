/* eslint-disable react/prop-types */
function ButtonSatu({ children }) {
    // cara pertama menggunakan className standart
    return (
        <button className="px-4 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded transition duration-300 shadow-xl shadow-blue-300 hover:shadow-none">{children}</button>
    )
}

export default ButtonSatu;