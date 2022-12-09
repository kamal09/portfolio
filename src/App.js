// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './custom_style.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { fab } from '@fortawesome/free-brands-svg-icons';

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
                        <div className="d-flex flex-column">
                            <div className="py-2" style={{background: "#418ab3"}}>MD. KAMAL HOSSAIN</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2"><i className="fa fa-map-marker"></i></div>
                            <div className="p-2">Main Road, Block-K, South Banasree, Khilgoan-1219, Dhaka (Bangladesh)
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2"><i className="fa fa-mobile" aria-hidden="true"></i></div>
                            <div className="p-2">(+88)01710456520</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2"><i className="fa fa-google" aria-hidden="true"></i></div>
                            <div className="p-2">sonycsecu2@gmail.com</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2"><i className="fa fa-skype" aria-hidden="true"></i></div>
                            <div className="p-2">kamalhossainsony</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2"><i className="fab fa-hackerrank"></i></div>
                            <div className="p-2">https://www.hackerrank.com/Md_Kamal_Hossain</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                            <div className="p-2">https://www.linkedin.com/in/md-kamal-hossain-71403513b/</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2"><i className="fa fa-comments" aria-hidden="true"></i></div>
                            <div className="p-2">Language: Bengali, English, Japanese, Hindi</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
