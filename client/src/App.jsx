import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import QuestionCard from './components/QuestionsCard';
import TriviaGame from './components/TriviaGame';
import TeamSelector from './components/TeamSelector';
import Score from './components/Score';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/trivia_game' element={<TriviaGame/>} />
          <Route path='/score' element={<Score/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
