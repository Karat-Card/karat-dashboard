import Linechart from "../component/charts/Linechart" 

function Dashboard() {


    const handleopenpaybillpop = () => {
        // Handle the click event
        const open_paybill = document.getElementById('paybill_popup');
        const body = document.querySelector('body');
        debugger
        if(open_paybill.classList.contains('hide') ?? "") {
            open_paybill.classList.remove('hide');
            body.classList.add('black-trans');
          
        }
        else {
            open_paybill.classList.add('hide');
            open_paybill.classList.remove('black-trans');
        
        }
     };
     const handleclosepaybillpop = () => {
        // Handle the click event
        const open_paybill = document.getElementById('paybill_popup');
        const body = document.querySelector('body');
        debugger
        if(open_paybill.classList.contains('hide') ?? "") {
            open_paybill.classList.remove('hide');
            body.classList.add('black-trans');
          
        }
        else {
            open_paybill.classList.add('hide');
            body.classList.remove('black-trans');
        
        }
     };
     

    return (
        
        <section class="main_content dashboard_part">
            <div className="overlay"></div>
           <div class="container-fluid g-0">
            <div class="row">
                <div class="col-lg-12 p-0">
                    <div class="header_iner d-flex justify-content-between align-items-center">
                        <div class="sidebar_icon d-lg-none">
                            <i class="ti-menu"></i>
                        </div>
                        <div class="annoucment-bar">
                            <h3>Hey, David! Welcome back.</h3>
                        </div>
                        <div class="header_right d-flex justify-content-between align-items-center">
                            <div class="pay-bill">
                                <button class="btn btn-md paybill-btn btn-primary" onClick={handleopenpaybillpop} >Pay bill</button>
                                <div className="paybill-popup hide" id="paybill_popup">
                                   <form class="row  needs-validation" >
                                      <div className="d-flex justify-content-end">
                                        <a href="#" class="text-dark" onClick={handleclosepaybillpop}>X</a>
                                      </div>
                                      <div class="col-md-12 text-center">
                                            <p>Bill Due</p>
                                            <h3>$3,627<span class="f-grey">.00</span></h3>
                                      </div> 
                                      <div class="col-md-12 p-0">
                                        <input type="text" class="form-control w-100" placeholder="*** *** ***"   required/>
                                      </div>
                                      <div class="col-md-6 p-0">
                                         <input type="text" class="form-control w-100" placeholder="MM/YY" required/>
                                       </div>
                                      <div class="col-md-6 p-0">
                                         <input type="text" class="form-control w-100" placeholder="CVC"  required/>
                                      </div>
                                      <div class="col-12 p-0 mt-3">
                                        <button class="btn btn-primary rounded w-100" type="submit">Pay Bill</button>
                                      </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main_content_iner ">
            <div class="container-fluid p-0">
                <div class="row justify-content-center">
                    <div class="col-lg-12 col-xl-12">
                        <div class="white_box mb_30 ">
                            <div class="income_servay">
                                <div class="row">
                                    <div class="col-md-4 ">
                                        <div class="widget">
                                            <div class="d-flex justify-content-between ">
                                                <span class="title">Current Balance</span>
                                                <h3 class="amount">$<b>6,672</b> <span class="f-grey">.91</span> </h3>
                                            </div>
                                            <div class="divider"></div>
                                            <div class="d-flex justify-content-between pt-3">
                                                <span class="title">Credit Limit</span>
                                                <h3 class="amount">$<b>10,000</b> <span class="f-grey">.91</span> </h3>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar progress-primary" role="progressbar"
                                                    aria-valuenow="75" aria-valuemin="0"
                                                    style={{width: "75%"}}
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="widget mt-3">
                                            <div class="d-flex justify-content-between pt-3">
                                                <div>
                                                    <span class="title">Credit Score</span>
                                                    <span class="p-2 text-success badge bg-green">Excellent</span>
                                                </div>
                                                <h3 class="amount text-success">723</h3>
                                            </div>
                                            <div class="progress">
                                                    <div class="progress-bar bg-danger" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" > </div>
                                                    <div class="progress-bar progress-primary" role="progressbar"  style={{width: "15%"}}   aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" > </div>
                                                    <div class="progress-bar bg-warning" role="progressbar"  style={{width: "30%"}}   aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" > </div>
                                                    <div class="progress-bar progress-success" role="progressbar"  style={{width: "20%"}}  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 ">
                                        <div class="widget">
                                            <div class="d-flex flex-column">
                                                <span class="title">Spend</span>
                                                <span class="sub-title">This month</span>
                                                <br/>
                                                <h3><span class="amount-2">$<b>1,000</b></span> </h3>
                                            </div>
                                            <div class="divider"></div>
                                            <div id="chart-8"><Linechart/></div>

                                        </div>  
                                    </div>
                                    <div class="col-md-4">
                                        <div class="widget border-0 p-0">
                                            <div class="d-flex flex-column mb-3">
                                                <span class="title">Credit Card</span>
                                                <span class="sub-title">Credit Card</span>
                                            </div>
                                            <div class="cards" data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                <div class="container">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="card-chip">
                                                            <img src="./images/chip.png" class="img-fluid mt-3" />
                                                        </div>
                                                        <div class="card-logo">
                                                            <img src="https://framerusercontent.com/images/rl7upa3TRYly6OnrCTO8vfnUA0.png"
                                                                class="  img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div class="card-detail">
                                                        <h4>Neeraj Chinwan</h4>
                                                        <p>● ● ● ● &nbsp; ● ● ● ● &nbsp; ● ● ● ● &nbsp;9303</p>
                                                    </div>
                                                    <div class="d-flex justify-content-end">
                                                        <svg fill="#d98c33" width="80px" height="80px"
                                                            viewBox="0 0 32.00 32.00" version="1.1"
                                                            xmlns="http://www.w3.org/2000/svg" stroke="#d98c33"
                                                            stroke-width="0.00032">
                                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke="#CCCCCC"
                                                                stroke-width="0.064"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <title>visa</title>
                                                                <path
                                                                    d="M15.854 11.329l-2.003 9.367h-2.424l2.006-9.367zM26.051 17.377l1.275-3.518 0.735 3.518zM28.754 20.696h2.242l-1.956-9.367h-2.069c-0.003-0-0.007-0-0.010-0-0.459 0-0.853 0.281-1.019 0.68l-0.003 0.007-3.635 8.68h2.544l0.506-1.4h3.109zM22.429 17.638c0.010-2.473-3.419-2.609-3.395-3.714 0.008-0.336 0.327-0.694 1.027-0.785 0.13-0.013 0.28-0.021 0.432-0.021 0.711 0 1.385 0.162 1.985 0.452l-0.027-0.012 0.425-1.987c-0.673-0.261-1.452-0.413-2.266-0.416h-0.001c-2.396 0-4.081 1.275-4.096 3.098-0.015 1.348 1.203 2.099 2.122 2.549 0.945 0.459 1.262 0.754 1.257 1.163-0.006 0.63-0.752 0.906-1.45 0.917-0.032 0.001-0.071 0.001-0.109 0.001-0.871 0-1.691-0.219-2.407-0.606l0.027 0.013-0.439 2.052c0.786 0.315 1.697 0.497 2.651 0.497 0.015 0 0.030-0 0.045-0h-0.002c2.546 0 4.211-1.257 4.22-3.204zM12.391 11.329l-3.926 9.367h-2.562l-1.932-7.477c-0.037-0.364-0.26-0.668-0.57-0.82l-0.006-0.003c-0.688-0.338-1.488-0.613-2.325-0.786l-0.066-0.011 0.058-0.271h4.124c0 0 0.001 0 0.001 0 0.562 0 1.028 0.411 1.115 0.948l0.001 0.006 1.021 5.421 2.522-6.376z">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="white_box QA_section card_height_100">
                        <div class="white_box_tittle list_header m-0 align-items-center">
                            <div class="main-title mb-sm-15">
                                <h3 class="m-0 nowrap">Last Transactions</h3>
                            </div>
                            <div class="box_right d-flex lms_block">
                                <p><a href="#">See all <i class="fa fa-arrow-right" aria-hidden="true"></i></a></p>
                            </div>
                        </div>
                        <div class="">
                            <table class="table lms_table_active2">
                                <thead>
                                    <tr>
                                        <th scope="col">Transaction</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">
                                            <div class="patient_thumb d-flex align-items-center">
                                                <div class="student_list_img mr_20">
                                                    <img src="/images/icon/Netflex.png" alt="" srcset=""/>
                                                </div>
                                                Netflix
                                            </div>
                                        </td>
                                        <td>Feb 28, 2023</td>
                                        <td class="text-danger"><b>- $19.99</b></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div class="patient_thumb d-flex align-items-center">
                                                <div class="student_list_img mr_20">
                                                    <img src="/images/icon/macy.png" alt="" srcset=""/>
                                                </div>
                                                Macy’s
                                            </div>
                                        </th>
                                        <td>Feb 28, 2023</td>
                                        <td class="text-danger"><b>- $456.95</b></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div class="patient_thumb d-flex align-items-center">
                                                <div class="student_list_img mr_20">
                                                    <img src="/images/icon/topup.png" alt="" srcset=""/>
                                                </div>
                                                Top Up
                                            </div>
                                        </th>
                                        <td>Feb 28, 2023</td>
                                        <td class="text-success"><b>+$500.99</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                        </div>
                    </div>
        </div>
   



        <div class="offcanvas left-bar custom-offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel"></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="d-flex justify-content-center flex-wrap">
                                <div class="cards" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight">
                                    <div class="container">
                                        <div class="d-flex justify-content-between">
                                            <div class="card-chip">
                                                <img src="/images/chip.png" class="img-fluid mt-3" />
                                            </div>
                                            <div class="card-logo">
                                                <img src="https://framerusercontent.com/images/rl7upa3TRYly6OnrCTO8vfnUA0.png"
                                                    class="  img-fluid" />
                                            </div>
                                        </div>
                                        <div class="card-detail">
                                            <h4>Neeraj Chinwan</h4>
                                            <p>● ● ● ● &nbsp; ● ● ● ● &nbsp; ● ● ● ● &nbsp;9303</p>
                                        </div>
                                        <div class="d-flex justify-content-end">
                                            <svg fill="#d98c33" width="80px" height="80px" viewBox="0 0 32.00 32.00"
                                                version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#d98c33"
                                                stroke-width="0.00032">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke="#CCCCCC" stroke-width="0.064"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <title>visa</title>
                                                    <path
                                                        d="M15.854 11.329l-2.003 9.367h-2.424l2.006-9.367zM26.051 17.377l1.275-3.518 0.735 3.518zM28.754 20.696h2.242l-1.956-9.367h-2.069c-0.003-0-0.007-0-0.010-0-0.459 0-0.853 0.281-1.019 0.68l-0.003 0.007-3.635 8.68h2.544l0.506-1.4h3.109zM22.429 17.638c0.010-2.473-3.419-2.609-3.395-3.714 0.008-0.336 0.327-0.694 1.027-0.785 0.13-0.013 0.28-0.021 0.432-0.021 0.711 0 1.385 0.162 1.985 0.452l-0.027-0.012 0.425-1.987c-0.673-0.261-1.452-0.413-2.266-0.416h-0.001c-2.396 0-4.081 1.275-4.096 3.098-0.015 1.348 1.203 2.099 2.122 2.549 0.945 0.459 1.262 0.754 1.257 1.163-0.006 0.63-0.752 0.906-1.45 0.917-0.032 0.001-0.071 0.001-0.109 0.001-0.871 0-1.691-0.219-2.407-0.606l0.027 0.013-0.439 2.052c0.786 0.315 1.697 0.497 2.651 0.497 0.015 0 0.030-0 0.045-0h-0.002c2.546 0 4.211-1.257 4.22-3.204zM12.391 11.329l-3.926 9.367h-2.562l-1.932-7.477c-0.037-0.364-0.26-0.668-0.57-0.82l-0.006-0.003c-0.688-0.338-1.488-0.613-2.325-0.786l-0.066-0.011 0.058-0.271h4.124c0 0 0.001 0 0.001 0 0.562 0 1.028 0.411 1.115 0.948l0.001 0.006 1.021 5.421 2.522-6.376z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-12 mt-3">
                        {/* <!-- Nav tabs --> */}
                            <ul class="nav nav-tabs primary-custom-pill" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="Detail-tab" data-bs-toggle="tab"
                                        data-bs-target="#Detail" type="button" role="tab" aria-controls="Detail"
                                        aria-selected="true">Detail</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#Transactons" type="button" role="tab" aria-controls="Transactons"
                                        aria-selected="false">Transactons</button>
                                </li>
                            </ul>

                            {/* <!-- Tab panes --> */}
                            <div class="tab-content">
                                <div class="tab-pane active" id="Detail" role="tabpanel" aria-labelledby="detail-tab">

                                    <div class="container">
                                        <div class="row">
                                            <div>

                                            </div>
                                            <div class="col-md-12 offcanvas_table">
                                                <table class="table lms_table_active2">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Type</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td scope="row">Authorization</td>
                                                            <td>Feb 28, 2023</td>
                                                            <td>$1.37</td>
                                                            <td>
                                                                <span class="badge bg-green p-2">
                                                                    <i class="fa fa-circle" aria-hidden="true"></i> &nbsp;
                                                                    Authorized</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="d-flex justify-content-between align-items-center p-2 pb-3">
                                                    <div>Viewing 21–40 of 273 results</div>
                                                    <div class="">
                                                        <a>Prev</a> &nbsp; &nbsp; &nbsp;
                                                        <a>Next</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                      </div>
                    </div>

                </div>



            </div>
        </div>
        {/* <div class="footer_part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer_iner text-center">
                            <p>2023 © Karat - Designed by <a href="#"> <i class="ti-heart"></i> </a><a href="#">
                                    TrackDiv</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </section>

    );
}
export default Dashboard;