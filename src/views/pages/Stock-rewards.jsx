import Linechart from "../component/charts/Linechart";

function Stock_Reward() {


    const handleopenpaybillpop = () => {
        // Handle the click event
        const open_paybill = document.getElementById('paybill_popup');
        const body = document.querySelector('body');
        if (open_paybill.classList.contains('hide') ?? "") {
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
        if (open_paybill.classList.contains('hide') ?? "") {
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
                                <h3>Stock Rewards.</h3>
                            </div>
                            <div class="header_right d-flex justify-content-between align-items-center">
                                <button class="btn btn-md paybill-btn btn-default border">Manage Stock Rewards</button> &nbsp; 
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
                                                <input type="text" class="form-control w-100" placeholder="*** *** ***" required />
                                            </div>
                                            <div class="col-md-6 p-0">
                                                <input type="text" class="form-control w-100" placeholder="MM/YY" required />
                                            </div>
                                            <div class="col-md-6 p-0">
                                                <input type="text" class="form-control w-100" placeholder="CVC" required />
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
                                        <div class="col-md-12">
                                            <div class="">
                                                <div class="d-flex flex-column">
                                                    <span class="title">Spend</span>
                                                    <span class="sub-title">This month</span>
                                                    <br />
                                                    <h3><span class="amount-2">$<b>1,000</b></span> </h3>
                                                </div>
                                                <div class="divider"></div>
                                                <div id="h-100"><Linechart /></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="white_box QA_section card_height_100">
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
                                                        <img src="/images/icon/Netflex.png" alt="" srcset="" />
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
                                                        <img src="/images/icon/macy.png" alt="" srcset="" />
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
                                                        <img src="/images/icon/topup.png" alt="" srcset="" />
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

        </section>

    );
}
export default Stock_Reward;