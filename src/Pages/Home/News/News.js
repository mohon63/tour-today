import React from 'react';

const News = () => {
    return (
        <div>
            <div className="container py-5">
                <h2 className="text-center pb-3">Latest News & Blog</h2>
                <p className="text-center" style={{ padding: "0 320px" }}>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="https://templates.hibootstrap.com/jaunt/default/assets/img/blog/blog5.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Hang on the beach with little sea turtles.</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="https://templates.hibootstrap.com/jaunt/default/assets/img/blog/blog2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">In nightlife you can do anything you want.</h5>
                                <p className="card-text">I have personally participated in many of the programs mentioned on this site. One of the programs is Save Our Sea...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="https://templates.hibootstrap.com/jaunt/default/assets/img/blog/blog6.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Travel survival tips: airports & flights.</h5>
                                <p className="card-text">I am a self-proclaimed experience junkie. There is nothing I love more than going somewhere or doing something.There is nothing I love more than There is nothing I love more than new...</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default News;