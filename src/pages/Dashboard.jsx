import Layout from "../components/Layout"
import RaffleButton from "../components/RaffleButton"
import { useGameList } from "../hooks/useGameList"


export const Dashboard = () => {

    const {gameLists} = useGameList();

    const winningcode = gameLists?.find((code) => code?.win === true);

    return (
        <Layout>
            <div className="flex justify-center items-center">
                <div className="max-w-[800px]">
                    <div className="text-center my-6">
                        <h3 className="text-xl">Winning code for the day</h3>

                        <p className="font-bold text-3xl my-5">{winningcode?.winningcode}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {gameLists.map((code, index) => <RaffleButton code={code.winningcode} key={index} />)}
                        
                    </div>
                </div>

            </div>
        </Layout>


    )
}
