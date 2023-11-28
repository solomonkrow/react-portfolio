import { useRouteError } from 'react-router-dom';
import icon from '../assets/lotus-flower-svgrepo-com.svg'

const styles = {
  icon: {
    height: 50,
    color: 'gold'
  }
};

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className='m-5' id="error">
      <div className='row'>
        <h1 className='col-2'>Amitābha </h1>
      <img className='col-1' src={icon} alt="" style={styles.icon}/>
      </div>
      <p>( infinite light or immeasurable life )</p>
      <p>Apologies, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
}
