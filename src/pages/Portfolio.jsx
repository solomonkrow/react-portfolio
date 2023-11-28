import Project from '../components/Project';
import '../styles/Project.css';

const projects = [
  {
    id: 1,
    title: 'Social Network API',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gitURL: 'https://github.com/solomonkrow/social-network-api',
    deployURL:''
  },
  {
    id: 2,
    title: 'History Huddle',
    image: 'https://images.pexels.com/photos/36006/renaissance-schallaburg-figures-facade.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gitURL: 'https://github.com/solomonkrow/thoughts-blog',
    deployURL:'https://intense-sierra-33338-d926b5b9f060.herokuapp.com/'
  },
  {
    id: 3,
    title: 'Movie Grabber',
    image: 'https://images.pexels.com/photos/2061678/pexels-photo-2061678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gitURL: 'https://github.com/solomonkrow/movie-grabber',
    deployURL:'https://solomonkrow.github.io/movie-grabber/'
  },
  {
    id: 4,
    title: 'SVG Flag',
    image: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gitURL: 'https://github.com/solomonkrow/SVG-flag',
    deployURL:''
  },
  {
    id: 5,
    title: 'Note Taker',
    image: 'https://images.pexels.com/photos/606539/pexels-photo-606539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gitURL: 'https://github.com/solomonkrow/note-taker',
    deployURL:''
  },
  {
    id: 6,
    title: 'Employee Tracker',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gitURL: 'https://github.com/solomonkrow/employee-tracker',
    deployURL:''
  },
]

export default function Portfolio() {
  return (
    <section className="container pt-4">
      <h1>Portfolio</h1>
      <hr />
      
      <Project repo={projects}/>
    </section>
  );
}
