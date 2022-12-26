// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './custom_style.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
    return (
        <div className="App">
            <div className="container">
                {/*top part space*/}
                <div className="row">
                    <div className="col-12 my-3"></div>
                </div>
                {/*upper part*/}
                <div className="row">
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL + '/img/1542.jpg'} className="img-fluid rounded "
                             alt="Own Image"/>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-column">
                            <div className="py-2 " style={{background: "#418ab3"}}>
                                <div className="mx-3">MD. KAMAL HOSSAIN</div>
                            </div>
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
                {/*border*/}
                <div className="row">
                    <div className="col-12 border-top my-3"></div>
                </div>
                {/*WORK EXPERIENCE*/}
                <div className="row">
                    <div className="col-3">
                        <div className="d-flex justify-content-end">
                            <div className="fs-5 fw-bold" style={{color: "#418ab3"}}>WORK EXPERIENCE</div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="fs-6 fw-bold" style={{color: "#418ab3"}}>TOTAL YEAR OF EXPERIENCE: 6 YEARS</div>
                        <br/>
                        <div>
                            <div className="mt-1 fs-6 fw-bold" style={{color: "#418ab3"}}>SOFTWARE ENGINEER (15 MAR,
                                2022 – TILL NOW)
                            </div>
                            <div className="d-flex justify-content-start my-1">
                                <div style={{color: "#418ab3"}}>Newgen Technology Limited,
                                    Dhaka(Bangladesh).
                                </div>
                                <div className="mx-2">web:</div>
                                <div><a href="https://newgen-bd.com/"
                                        className="link-primary">https://newgen-bd.com/</a></div>
                            </div>
                            <div className="px-2"><p>Developing a new project names ”Agre-Science” which has to module
                                like Inventory and
                                sales. Developing this project using Spring boot Micro-service Architecture, React JS.
                                Also working on a project named “Loan Management” that uses Node JS, MongoDB and React
                                JS.</p></div>
                        </div>

                        <div>
                            <div className="mt-1 fs-6 fw-bold" style={{color: "#418ab3"}}>SOFTWARE ENGINEER (01 DEC,
                                2020 – 14 MAR, 2022)
                            </div>
                            <div className="d-flex justify-content-start my-1">
                                <div style={{color: "#418ab3"}}>Datasoft Systems Bangladesh Limited,
                                    Dhaka(Bangladesh).
                                </div>
                                <div className="mx-2">web:</div>
                                <div><a href="https://datasoft-bd.com/"
                                        className="link-primary">https://datasoft-bd.com/</a></div>
                            </div>
                            <div className="px-2"><p>Developed Security service using OAuth2, routing service and
                                service register using Eureka, Reporting service using jasper technology in spring boot.
                                Developed a new Project named “Audit 360 next” that using Micro-service Architecture,
                                Spring Boot with multitenant technology and Vue JS. Also developed a service for common
                                session management for some mobile Apps using Node JS and MongoDB.</p></div>
                        </div>

                        <div>
                            <div className="mt-1 fs-6 fw-bold" style={{color: "#418ab3"}}>SOFTWARE ENGINEER (01 DEC,
                                2019 - 20 JUL, 2020)
                            </div>
                            <div className="d-flex justify-content-start my-1">
                                <div style={{color: "#418ab3"}}>Human Resocia, Shinjuku (Japan).</div>
                                <div className="mx-2">web:</div>
                                <div><a href="https://git.resocia.jp/en/"
                                        className="link-primary">https://git.resocia.jp/en/</a></div>
                            </div>
                            <div className="px-2"><p>I took Japanese Language (N4) and Culture Training to work as a
                                Software Engineer in Japan under Human Resocia.</p>
                            </div>
                        </div>

                        <div>
                            <div className="mt-1 fs-6 fw-bold" style={{color: "#418ab3"}}>SOFTWARE ENGINEER (01 SEP,
                                2016 -24 NOV, 2019)
                            </div>
                            <div className="d-flex justify-content-start my-1">
                                <div style={{color: "#418ab3"}}>BRAC IT Services Limited, Dhaka (Bangladesh).</div>
                                <div className="mx-2">web:</div>
                                <div><a href="http://www.bracits.com/"
                                        className="link-primary">http://www.bracits.com/</a></div>
                            </div>
                            <div className="px-2">
                                <p>This is the biggest ERP Solutions in Bangladesh History for BRAC
                                    NGO (World biggest NGO)
                                    named as “BRAC Bangladesh ERP”. It has following module: Admin, Finance & Accounts,
                                    HR,
                                    Procurement, Micro-Finance, Fixed Asset, e-Tender, Budget etc. I was the proud team
                                    member of Finance & Accounts module. My responsibilities are as follow:
                                    <ul>
                                        <li>Determines operational feasibility by evaluating analysis, problem
                                            definition, requirements, solution
                                        </li>
                                        <li>Develops software solutions by studying information needs, conferring with
                                            users and business-analyst, and studying systems flow, data usage, and work
                                            processes
                                        </li>
                                        <li>Follows the software development lifecycle</li>
                                        <li>Improves operations by conducting systems analysis and recommending changes
                                            in procedures
                                        </li>
                                        <li>Protects operations by keeping information confidential</li>
                                        <li>Developed 90% Financial reports according to SRS</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="mt-1 fs-6 fw-bold" style={{color: "#418ab3"}}>SOFTWARE ENGINEER (01 FEB,
                                2016 - 31 AUG, 2016)
                            </div>
                            <div className="d-flex justify-content-start my-1">
                                <div style={{color: "#418ab3"}}>R-Creation, Chittagong (Bangladesh).</div>
                                <div className="mx-2">web:</div>
                                <div><a href="http://rcreation-bd.com/"
                                        className="link-primary">http://rcreation-bd.com/</a></div>
                            </div>
                            <div className="px-2">
                                <p>This company has some products. Among them, I worked in a project named as
                                    “PRICE.KOTO”. This software is a B2B online market place. My responsibilities are as
                                    follow:
                                    <ul>
                                        <li>Determines operational feasibility by evaluating analysis, problem
                                            definition, requirements, solution
                                        </li>
                                        <li>Develops software solutions by studying information needs, conferring with
                                            users, and studying systems flow, data usage, and work processes
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
                {/*border*/}
                <div className="row">
                    <div className="col-12 border-top my-3"></div>
                </div>
                {/*SKILLS*/}
                <div className="row">
                    <div className="col-3">
                        <div className="d-flex justify-content-end">
                            <div className="fs-5 fw-bold" style={{color: "#418ab3"}}>SKILLS</div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Language:</div>
                            <div className="mx-2">Java 8, JavaScript, Groovy, Python, C</div>
                        </div>
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Web & Scripting Language:</div>
                            <div className="mx-2">GSP, JSP, HTML5, CSS3, JavaScript, jQuery, Ajax, Twitter Bootstrap,
                                Thymeleaf
                            </div>
                        </div>
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Framework:</div>
                            <div className="mx-2">Spring Boot, React JS, Node JS, , Vue JS, Grails, JPA, Hibernate</div>
                        </div>
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Tools:</div>
                            <div className="mx-2">IntelliJ IDEA, WebStorm, Datagrip, PyCharm, Eclipse, SQLyog, Studio3T,
                                PostgreSQL Maestro, Postman
                            </div>
                        </div>
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Build Tool:</div>
                            <div className="mx-2">Maven, Gradle</div>
                        </div>
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Reporting Tools:</div>
                            <div className="mx-2">iReport, Jasper Studio, Jasper Server</div>
                        </div>
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Database:</div>
                            <div className="mx-2">PostgreSQL, MySQL, MongoDB</div>
                        </div>
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Version Control System & Host:</div>
                            <div className="mx-2">Git, SVN, Tortoise SVN, GitHub, GitLab, Jira, Redmine</div>
                        </div>
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Application Server:</div>
                            <div className="mx-2">Apache Tomcat</div>
                        </div>
                        <div className="d-flex justify-content-start my-1">
                            <div className="fw-bold">Operating System:</div>
                            <div className="mx-2">Linux (Ubuntu 20.04), Windows 10</div>
                        </div>

                    </div>
                </div>
                {/*footer*/}
                <div className="row">
                    <div className="col-12 my-3"></div>
                </div>
            </div>

        </div>
    );
}

export default App;
