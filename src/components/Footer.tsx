import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <h3>Mark Editor</h3>
      <section>
        <p className='bar'>Guilherme Machado</p>
          
        <>
          <p>
            { new Date().getFullYear() }
          </p>
        </> 
      </section>
    </footer>
  )
}
