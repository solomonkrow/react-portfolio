import '../styles/Pages.css'
export default function Resume() {
  const styles = {
    text: {
      marginLeft: 20,
    },
  };
  return (
    <section className="container pt-4 mb-5">
        <div className='col-xs-10 col-lg-4'>
        <h1>Resume</h1>
      <p>
        download <span>my resume</span>
      </p>
      <div>
        <h4>Front-End Skills</h4>
        <hr />
        <ul style={styles.text}>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap/Bulma</li>
          <li>React</li>
          <li>jQuery</li>
        </ul>
      </div>
      <div>
        <h4>Back-End Skills</h4>
        <hr />
        <ul style={styles.text}>
          <li>Nodejs</li>
          <li>Expressjs</li>
          <li>MySQL/Sequelize</li>
          <li>MongoDB/Mongoose</li>
          <li>Handlebars</li>
        </ul>
      </div>
        </div>
      
    </section>
  );
}
