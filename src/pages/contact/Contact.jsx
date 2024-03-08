import Form from '../../components/form'
import './contact.css'

export default function Contact() {
  return (
    <div>
            <Form />
            <br></br>
      <div className="card">
  <div className="card-header text-center">
    Contact Information
  </div>
  <div className="card-body">
    <h5 className="card-title">Feel free to reach me directly at:</h5>
    <p className="card-text">email: connerwmar@gmail.com</p>
    <p className="card-text">phone: 405-481-0066</p>
  </div>
</div>

      </div>
  );
}
