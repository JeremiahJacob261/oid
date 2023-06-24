import logo from './logo.svg';
import './App.css';

function App() {
  const downloadEmployeeData = () => {
		fetch('http://localhost:80')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'Jerryl.pem';
					a.click();
				});
				//window.location.href = response.url;
		});
	}
  return (
    <div id="container">
    <h1>Download File using React App</h1>
    <h3>Download Employee Data using Button</h3>
    <button onClick={downloadEmployeeData}>Download</button>
    <p/>
    <h3>Download Employee Data using Link</h3>
    <a href="#" onClick={downloadEmployeeData}>Download</a>
  </div>
  );
}

export default App;
