

// eslint-disable-next-line react/prop-types
const RaffleButton = ({ code }) => {
    return (
        <div className="flex items-center space-x-3 rounded-lg bg-indigo-500 px-6 py-5 cursor-pointer hover:shadow-3xl">
            {code}
        </div>
    )
}

export default RaffleButton