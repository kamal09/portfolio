// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './custom_style.css';


function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row mb-5"></div>
                <div className="row">
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL + '/img/1542.jpg'} className="img-fluid rounded "
                             alt="Own Image"/>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col name-div mt-5">MD. KAMAL HOSSAIN</div>
                        </div>
                        <div className="row">
                            <div className="col">Main Road, Block-K, South Banasree, Rampura, 1219 Dhaka (Bangladesh)
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">(+88)01710456520</div>
                        </div>
                        <div className="row">
                            <div className="col">sonycsecu2@gmail.com</div>
                        </div>
                        <div className="row">
                            <div className="col">Skypee kamalhossainsony</div>
                        </div>
                        <div className="row">
                            <div className="col">https://www.hackerrank.com/Md_Kamal_Hossain</div>
                        </div>
                        <div className="row">
                            <div className="col">https://www.linkedin.com/in/md-kamal-hossain-71403513b/</div>
                        </div>
                        <div className="row">
                            <div className="col">Language: Bengali, English, Japanese, Hindi</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
