import reactLogo from '../assets/react.svg'
import { useNavigate } from 'react-router-dom'

function Home () {
    const navigate = useNavigate();

    return (
      <div>
            <div>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <div>
                <button onClick={() => navigate("/list")}>List</button>
                <button onClick={() => navigate("/chucknorris")}>Chuck Norris</button>
            </div>
      </div>
  )
}

export default Home
