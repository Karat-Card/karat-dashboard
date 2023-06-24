
function Account_doc() {

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
        <section class="main_content dashboard_part" id="disclosures">
            <div class="main_content_iner ">
                <div class="container-fluid pt-3">
                    <div class="row justify-content-center">
                        <div class="col-xl-12">
                            <div class="row header-wrapper d-flex justify-content-between">
                                <div class="col-6 header-links">
                                    <nav class="nav justify-content-start align-items-center">
                                        <a class="nav-link active" href="#" aria-current="page">Accounts Documents</a>
                                        <a class="nav-link " href="#">Disclosures</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mt-5">
                            <div class="d-flex align-items-start">
                                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="nav-link tab active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                        Terms & Conditions <span class="badge-success">Accepted</span>
                                    </button>
                                    <button class="nav-link tab" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                        Privacy Policy <span class="badge-success">Accepted</span>
                                    </button>
                                </div>
                                <div class="tab-content w-100" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12 d-flex justify-content-between tab-pan-header">
                                                    <p class="title">Terms & Conditions</p>
                                                    <span class="badge-success">Accepted</span>
                                                </div>
                                            </div>
                                            <div class="row mt-5">
                                                <div class="col-md-12 d-flex justify-content-between tab-pan-header">
                                                    <iframe src="https://www.africau.edu/images/default/sample.pdf" width={768} height={500}></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-12 d-flex justify-content-between tab-pan-header">
                                                        <p class="title">Privacy Policy</p>
                                                        <span class="badge-success">Accepted</span>
                                                    </div>
                                                </div>
                                                <div class="row mt-5">
                                                    <div class="col-md-12 d-flex justify-content-between tab-pan-header">
                                                        <iframe src="https://www.africau.edu/images/default/sample.pdf" width={768} height={500}></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
        
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}
export default Account_doc;