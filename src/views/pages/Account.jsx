
function Account() {

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
        <section class="main_content dashboard_part" id="Accounts">
            <div class="main_content_iner ">
                <div class="container-fluid pt-3">
                    <div class="row justify-content-center">
                        <div class="col-xl-12">
                            <div class="row header-wrapper d-flex justify-content-between">
                                <div class="col-6 header-links">
                                    <nav class="nav justify-content-start align-items-center">
                                        <a class="nav-link active" href="#" aria-current="page">Accounts</a>
                                        <a class="nav-link" href="#">Loans</a>
                                        <a class="nav-link" href="#">Credit Cards</a>
                                    </nav>
                                </div>
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
                                    <tr>
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
                                    <tr>
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
                    <div class="row">
                        <div class="col-md-12">
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

        </section>

    );
}
export default Account;