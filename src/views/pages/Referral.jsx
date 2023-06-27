import { useEffect } from "react";

const Referral = (prop) => {

    const getAuthInfo = () => {
        return {
            email: '<PARTICIPANT_EMAIL>',
            hash: '<PARTICIPANT_HASH>'
        };
    };
    const autoAuthParticipant = () => {
        return {
            email: '<PARTICIPANT_EMAIL>',
            hash: '<PARTICIPANT_HASH>'
        };
    };
    const insertGrowsurfScript = () => {
        const script = document.createElement('script');
        script.src = 'https://growsurf.com/growsurf.js?v=2.0.0';
        script.setAttribute('grsf-campaign', 'sqgbsv');
        script.async = true;
        document.head.appendChild(script);
    }
    const handleGrowSurfReady = async () => {
        // remove our listener
        window.removeEventListener('grsfReady', handleGrowSurfReady, false);
        // auto authenticate the participant
        await autoAuthParticipant();
    }

    useEffect(() => {
        if (!window.growsurf) {
            // insert the GrowSurf script
             insertGrowsurfScript();
            // Listen and wait for the Growsurf Universal Code to initialize
            window.addEventListener('grsfReady', handleGrowSurfReady);
          } else {
            // Authorize authenticate your participant (Optional)
            handleGrowSurfReady();
          }
    }, [])
    return (
        <section class="main_content dashboard_part" id="disclosures">
        <div class="main_content_iner ">
            <div class="container-fluid pt-3">
                <div class="row justify-content-center">
                    <div class="col-xl-12">
                    <div data-grsf-block-form></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )

}

export default Referral;