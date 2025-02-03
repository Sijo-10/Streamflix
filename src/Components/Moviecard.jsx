import React from 'react'

function Moviecard() {
    return (
        <>
            <body className='bg-dark'>
                <div className="container bg-dark">
                    <h2 className="text-center text-3xl font-bold  text-white">New & Popular</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card rounded-3 shadow-sm bg-dark">
                                <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQb-iHXvl_ui4KojFoTDeTXYvLX6pkelrHSaXDPgrmEuzC1oC0bJwWTEANS8bSVhQFH_5PaJETW3brFcRwTgnsUg3mnFMFH7fOdn4tSWWJtRYkVCJ31yNNnwMpOAJgqnj0PHG1G732N0qd_uD7I15i52EtWc.jpg?r=a64" className="card-img-top" alt="Inception"></img>
                                <div className="card-body">
                                    <a href="#" className="btn btn-danger w-100">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card rounded-3 shadow-sm bg-dark">
                                <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQcMTwmWX_5-R58R1DyBGUlq83_B2ICcKA9UI_GmUXrR8DsDNC19K15vbXRAMqtzx8opmiZ8MbiyO8z1lsz2IcCfCp8UOebq6KVncT9N6geEouXnGfgSSfOQWrotWElZ__9eui9GTYoCGIQDSOGPN.jpg?r=782" className="card-img-top" alt="Interstellar"></img>
                                <div className="card-body">
                                    <a href="#" className="btn btn-danger w-100">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card rounded-3 shadow-sm bg-dark">
                                <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQeKVf6_zRq3QNYeqa9NKkVBnd3BkJqoArxf2vBXF03QMgBdeWdhgRaJHTzxAwh6JmGbrZ9IcirVk3AdQhN8tpFySB6MXr_tvtxLlyT3wgwXO8LL1rsdGVTOY4L6ZGr6Y6z5m1dLH2wJrMV3RATle8fHgvqY.jpg?r=eb1" className="card-img-top" alt="The Dark Knight" style={{height:"300px"}}></img>
                                <div className="card-body">
                                    <a href="#" className="btn btn-danger w-100">Watch Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card rounded-3 shadow-sm bg-dark">
                                <img src="https://occ-0-6155-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfojdskBMfb8a8lm0dKM_P0ghIF8L1WtoDqYQNqvoHbItnzlqyZJTN9ESIE2RoGVBFsbNBWwATpGvA9OgzJ-_-SozuNypR1MP5I.jpg?r=93f" class="card-img-top" alt="Inception"></img>
                                <div className="card-body">
                                    <a href="#" className="btn btn-danger w-100">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card rounded-3 shadow-sm bg-dark">
                                <img src="https://occ-0-6155-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbRP-gZYjvxwcl7Bkxds6KZxqFMs6fR1PH8Gcd7L-izGX2mMcH0mHfthJztmznooQTNPps50u3QVS-GYWFdo-h8eJEpR36AjmnzQshXo2e4-Yc-KYivvlQCRmMMlSSPrJ0Ps2FSIV-s3gqIX0MncercSB26J2jl4wgCcyh0oVBJ3zfetY4y4v6Sv5ofuhgfmmRn7ym21K59_7o8axppiLT-OA1O6IsFkbf2azAN1SG1_E3YiKlCvA4VgGcQT5-Wkkq3IksM-oTRHWkvbtedjazHq.jpg?r=181" className="card-img-top" alt="Interstellar"></img>
                                <div className="card-body">
                                    <a href="#" className="btn btn-danger w-100">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card rounded-3 shadow-sm bg-dark">
                                <img src="https://occ-0-6155-3663.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVDSEjcgEbYI5bjTK4mO-qoxnjCxgNCVUJnwt-1ORJ_5-p3G3UE_5pLYEtbeFKZHuRllsyX1LaNOYcoYRixTSdgWIPNnK-YZBic.jpg?r=0f0" class="card-img-top" alt="The Dark Knight"></img>
                                <div className="card-body">
                                    <a href="#" className="btn btn-danger w-100">Watch Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Moviecard
