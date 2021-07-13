import React from 'react'

const Home = () => {
    return (
        <>
                <div id="main">
                <div className="">
                    <div className="accordion" id="faq">
                    <div className="card">
                        <div className="dropdown" id="faqhead3">
                        <span href="#" className="btn btn-header-link collapsed d-flex justify-content-between" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3"><span>Dropdown</span> <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                        </div>
                        <br/>
                        <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <b>Note : Here should be the text related to selected dropdown</b>
        </>
    )
}

export default Home
