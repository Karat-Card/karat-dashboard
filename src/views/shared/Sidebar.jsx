

function Sidebar() {

    const handleopenbutton = () => {
        // Handle the click event
        const dropdownMenu = document.getElementById('openpopup_dropdown');
        debugger
        if (dropdownMenu.classList.contains('hide') ?? "") {
            dropdownMenu.classList.remove('hide');
        }
        else {
            dropdownMenu.classList.add('hide');
        }
    };
    return (
        <div>
            <nav className="sidebar">
                <div className="logo d-flex justify-content-between">
                    <a href="index.html"><img src="./images/logo.webp" alt="" /></a>
                    <div className="sidebar_close_icon d-lg-none">
                        <i className="ti-close"></i>
                    </div>
                </div>
                <ul id="sidebar_menu">
                    <li className="mm-active">
                        <a href="/" aria-expanded="false">
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.25 10.9998L10.2045 2.04533C10.6438 1.60599 11.3562 1.60599 11.7955 2.04532L20.75 10.9998M3.5 8.74983V18.8748C3.5 19.4961 4.00368 19.9998 4.625 19.9998H8.75V15.1248C8.75 14.5035 9.25368 13.9998 9.875 13.9998H12.125C12.7463 13.9998 13.25 14.5035 13.25 15.1248V19.9998H17.375C17.9963 19.9998 18.5 19.4962 18.5 18.8748V8.74983M7.25 19.9998H15.5"
                                    stroke="#D98C33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="/account" aria-expanded="false">
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.875 11.25L8.08906 13.1925C8.50022 13.8504 9.22128 14.25 9.99706 14.25H12.0029C12.7787 14.25 13.4998 13.8504 13.9109 13.1925L15.125 11.25M1.40961 6H6.04584C6.79813 6 7.50065 6.37598 7.91795 7.00192L8.08205 7.24808C8.49935 7.87402 9.20187 8.25 9.95416 8.25H12.0458C12.7981 8.25 13.5007 7.87402 13.9179 7.24808L14.0821 7.00192C14.4993 6.37598 15.2019 6 15.9542 6H20.5904M1.40961 6C1.30498 6.2628 1.25 6.54503 1.25 6.83233V9C1.25 10.2426 2.25736 11.25 3.5 11.25H18.5C19.7426 11.25 20.75 10.2426 20.75 9V6.83233C20.75 6.54503 20.695 6.2628 20.5904 6M1.40961 6C1.50059 5.77151 1.62911 5.55771 1.79167 5.36805L5.07653 1.53572C5.50399 1.03702 6.12802 0.75 6.78485 0.75H15.2151C15.872 0.75 16.496 1.03702 16.9235 1.53572L20.2083 5.36805C20.3709 5.55771 20.4994 5.77151 20.5904 6M3.5 17.25H18.5C19.7426 17.25 20.75 16.2426 20.75 15V12.375C20.75 11.7537 20.2463 11.25 19.625 11.25H2.375C1.75368 11.25 1.25 11.7537 1.25 12.375V15C1.25 16.2426 2.25736 17.25 3.5 17.25Z"
                                    stroke="#495057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Accounts</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" aria-expanded="false">
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 15.25C6.46719 15.25 11.7636 15.9812 16.7968 17.3512C17.5238 17.5491 18.25 17.0086 18.25 16.2551V15.25M2.5 1V1.75C2.5 2.16421 2.16421 2.5 1.75 2.5H1M1 2.5V2.125C1 1.50368 1.50368 1 2.125 1H19M1 2.5V11.5M19 1V1.75C19 2.16421 19.3358 2.5 19.75 2.5H20.5M19 1H19.375C19.9963 1 20.5 1.50368 20.5 2.125V11.875C20.5 12.4963 19.9963 13 19.375 13H19M20.5 11.5H19.75C19.3358 11.5 19 11.8358 19 12.25V13M19 13H2.5M2.5 13H2.125C1.50368 13 1 12.4963 1 11.875V11.5M2.5 13V12.25C2.5 11.8358 2.16421 11.5 1.75 11.5H1M13.75 7C13.75 8.65685 12.4069 10 10.75 10C9.09315 10 7.75 8.65685 7.75 7C7.75 5.34315 9.09315 4 10.75 4C12.4069 4 13.75 5.34315 13.75 7ZM16.75 7H16.7575V7.0075H16.75V7ZM4.75 7H4.7575V7.0075H4.75V7Z"
                                    stroke="#495057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span>Transactions</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" aria-expanded="false">
                            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.25 4.64258H20.75M1.25 5.39258H20.75M4.25 10.6426H10.25M4.25 12.8926H7.25M3.5 15.8926H18.5C19.7426 15.8926 20.75 14.8852 20.75 13.6426V3.14258C20.75 1.89994 19.7426 0.892578 18.5 0.892578H3.5C2.25736 0.892578 1.25 1.89994 1.25 3.14258V13.6426C1.25 14.8852 2.25736 15.8926 3.5 15.8926Z"
                                    stroke="#495057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span>Cards</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" aria-expanded="false">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 5.89258V8.89258M16 8.89258V11.8926M16 8.89258H19M16 8.89258H13M10.75 4.76758C10.75 6.63154 9.23896 8.14258 7.375 8.14258C5.51104 8.14258 4 6.63154 4 4.76758C4 2.90362 5.51104 1.39258 7.375 1.39258C9.23896 1.39258 10.75 2.90362 10.75 4.76758ZM1.00092 17.6269C1.00031 17.5905 1 17.5541 1 17.5176C1 13.9968 3.85418 11.1426 7.375 11.1426C10.8958 11.1426 13.75 13.9968 13.75 17.5176V17.5201C13.75 17.5558 13.7497 17.5914 13.7491 17.6269C11.8874 18.7478 9.70647 19.3926 7.375 19.3926C5.04353 19.3926 2.86264 18.7478 1.00092 17.6269Z"
                                    stroke="#495057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span>Stock Rewards</span>
                        </a>
                    </li>

                    <li className="sidebar-foot d-flex">
                        <a href="#" aria-expanded="false">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99271C21.75 7.77405 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9694 11.5439 13.9694 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77405 2.25 6.99271V6.75"
                                    stroke="#495057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <span>Messages <b
                                className="badge badge-counter bg-danger rounded-circle text-center text-white">0</b></span>
                        </a>
                    </li>
                </ul>
                <div onClick={handleopenbutton} className="profile_info ps-2 pe-2 d-flex flex-wrap justify-content-evenly align-items-center">
                    <div className="profile-image">
                        <img src="./images/client_img.png" alt="#" />
                    </div>
                    <div className="profile-info">
                        <h4>David Wise</h4>
                        <a href="#">david@gmail.com</a>
                    </div>
                    <div className="btn-detail">
                        <a type="#" >
                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.75 2C2.75 2.41421 2.41421 2.75 2 2.75C1.58579 2.75 1.25 2.41421 1.25 2C1.25 1.58579 1.58579 1.25 2 1.25C2.41421 1.25 2.75 1.58579 2.75 2Z"
                                    stroke="#ADB5BD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M8.75 2C8.75 2.41421 8.41421 2.75 8 2.75C7.58579 2.75 7.25 2.41421 7.25 2C7.25 1.58579 7.58579 1.25 8 1.25C8.41421 1.25 8.75 1.58579 8.75 2Z"
                                    stroke="#ADB5BD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M14.75 2C14.75 2.41421 14.4142 2.75 14 2.75C13.5858 2.75 13.25 2.41421 13.25 2C13.25 1.58579 13.5858 1.25 14 1.25C14.4142 1.25 14.75 1.58579 14.75 2Z"
                                    stroke="#ADB5BD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="profile-settings hide" id="openpopup_dropdown">
                            <ul>
                                <li>
                                    <a  href="/account-documents" className="text-dark">
                                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 13.25V10.625C16.5 8.76104 14.989 7.25 13.125 7.25H11.625C11.0037 7.25 10.5 6.74632 10.5 6.125V4.625C10.5 2.76104 8.98896 1.25 7.125 1.25H5.25M7.5 1.25H2.625C2.00368 1.25 1.5 1.75368 1.5 2.375V19.625C1.5 20.2463 2.00368 20.75 2.625 20.75H15.375C15.9963 20.75 16.5 20.2463 16.5 19.625V10.25C16.5 5.27944 12.4706 1.25 7.5 1.25Z" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Account documents
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-dark">
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 11.7506L9.25 14.0006L13 8.75058M10 1.71484C7.8495 3.75147 4.94563 5.00059 1.75 5.00059C1.69922 5.00059 1.64852 5.00028 1.59789 4.99965C1.2099 6.17976 1 7.44069 1 8.75064C1 14.3422 4.82432 19.0405 10 20.3726C15.1757 19.0405 19 14.3422 19 8.75064C19 7.44069 18.7901 6.17976 18.4021 4.99965C18.3515 5.00028 18.3008 5.00059 18.25 5.00059C15.0544 5.00059 12.1505 3.75147 10 1.71484Z" stroke="#D98C33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Disclosures
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.75 3.75V14.25C20.75 15.4926 19.7426 16.5 18.5 16.5H3.5C2.25736 16.5 1.25 15.4926 1.25 14.25V3.75M20.75 3.75C20.75 2.50736 19.7426 1.5 18.5 1.5H3.5C2.25736 1.5 1.25 2.50736 1.25 3.75M20.75 3.75V3.99271C20.75 4.77405 20.3447 5.49945 19.6792 5.90894L12.1792 10.5243C11.4561 10.9694 10.5439 10.9694 9.82078 10.5243L2.32078 5.90894C1.65535 5.49945 1.25 4.77405 1.25 3.99271V3.75" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.75 7V3.25C11.75 2.00736 10.7426 1 9.5 1L3.5 1C2.25736 1 1.25 2.00736 1.25 3.25L1.25 16.75C1.25 17.9926 2.25736 19 3.5 19H9.5C10.7426 19 11.75 17.9926 11.75 16.75V13M14.75 13L17.75 10M17.75 10L14.75 7M17.75 10L5 10" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        SignOut
                                    </a>
                                </li>
                            </ul>
                        </div>
            </nav>
        </div>
    );
}

export default Sidebar;