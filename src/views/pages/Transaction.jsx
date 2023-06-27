
function Transaction() {

    const handleclosepaybillpop = () => {
        // Handle the click event
        const open_paybill = document.getElementById('paybill_popup');
        const body = document.querySelector('body');
        debugger
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
        <section class="main_content dashboard_part" id="Transaction">
            <div class="main_content_iner ">
                <div class="container-fluid pt-3">
                    <div class="row justify-content-center">
                        <div class="col-xl-12">
                            <div class="row header-wrapper d-flex justify-content-end">
                                <div class="col-6 header-search">
                                    <form action="">
                                        <div class="row">
                                            <div class="col-8">
                                                <input type="text" placeholder="Search" class="form-control rounded" />
                                            </div>
                                            <div class="col-2">
                                                <button class="btn btn-default border rounded ">Filter</button>
                                            </div>
                                            <div class="col-2">
                                                <button class="btn btn-default border rounded">Sort</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 offcanvas_table">
                            <table class="table lms_table_active2">
                                <thead>
                                    <tr>
                                        <th scope="col">Account</th>
                                        <th scope="col">Holder</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-bs-toggle="offcanvas"
                                            data-bs-target="#td" aria-controls="offcanvasRight">
                                        <td scope="row">
                                            <b class="title">Current Account</b>
                                            <p class="acnt-no">000000011</p>
                                        </td>
                                        <td>David Wise</td>
                                        <td>
                                            <span class="badge-success">Authorized</span>
                                        </td>
                                        <td><span class="text-green">+ $10,001.64</span></td>
                                    </tr>
                                    <tr data-bs-toggle="offcanvas"
                                            data-bs-target="#td" aria-controls="offcanvasRight">
                                        <td scope="row">
                                            <b class="title">Current Account</b>
                                            <p class="acnt-no">000000011</p>
                                        </td>
                                        <td>David Wise</td>
                                        <td>
                                            <span class="badge-suspend">Authorized</span>
                                        </td>
                                        <td><span class="text-suspend">+ $2,500.00</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <div class="d-flex justify-content-between align-items-center p-2 pb-3">
                                <div class="total-result">
                                    Viewing 21–40 of 273 results
                                </div>
                                <div class="pagination-button">
                                    <a>Prev</a> &nbsp; &nbsp; &nbsp;
                                    <a>Next</a>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
            <div class="offcanvas  custom-offcanvas offcanvas-end td" tabindex="-1" id="td"
                aria-labelledby="tdLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="container">
                        <div class="row header">
                            <div class="col-md-6">
                                <h3 class="title">Payment Cleared</h3>
                                <span class="sub-title">Transaction 973241</span>
                            </div>
                            <div class="col-md-6">
                                <h3 class="title-amount">+$236.00</h3>
                            </div>
                        </div>
                        <div class="row header">
                            <div className="col-md-12">
                                <div class="col-md-12 offcanvas_table">
                                    <table class="table lms_table_active2">

                                        <tbody>
                                            <tr>
                                               <th>Receiver Account</th>
                                               <td>000000011</td>  
                                            </tr>
                                            <tr>
                                               <th>Date</th>
                                               <td>Mar 20, 2023</td>
                                            </tr>
                                            <tr>
                                               <th>Amount</th>
                                               <td>$236.00</td>
                                            </tr>
                                            <tr>
                                               <th>Type</th>
                                               <td></td>
                                            </tr>
                                            <tr>
                                               <td>Sender Account</td>
                                               <td>000000012</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}
export default Transaction;