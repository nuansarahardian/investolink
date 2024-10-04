import React from "react";

const BannerProvinsi = () => {
    return (
        <>
            <div
                className="flex w-screen h-[300px] relative bg-cover "
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.6)), url('gedung_ikonik/jawatimur.jpg')`,
                }}
            >
                <div className="absolute inset-0 z-10 flex   flex-col h-full justify-between pt-[32px] pl-[48px] pb-[24px]">
                    <div>
                        <img src="icon/back.png" alt="" className="w-[24px]" />
                    </div>

                    <div className="flex flex-col text-white/50 ">
                        <div>
                            <img
                                src="logo/lambang provinsi-aceh.png"
                                alt=""
                                className=" w-[60px] mb-2"
                            />
                            <p className="text-white  font-bold text-[40px]">
                                Aceh
                            </p>
                        </div>
                        <div className="flex flex-row gap-6">
                            <div className="flex flex-row my-auto">
                                <img
                                    src="icon/telepon.png"
                                    className="w-[24px] h-[24px] mr-2"
                                    alt=""
                                />
                                <p>(061) 4156000</p>
                            </div>
                            <div className="flex flex-row my-auto">
                                <img
                                    src="icon/web.png"
                                    className="w-[24px] h-[24px] mr-2"
                                    alt=""
                                />
                                <p>https://www.sumutprov.go.id</p>
                            </div>
                            <div className="flex flex-row my-auto">
                                <img
                                    src="icon/mail.png"
                                    className="w-[24px] h-[20px] mr-2"
                                    alt=""
                                />
                                <p>
                                    https://www.sumutprov.go.id
                                    info@sumutprov.go.id
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerProvinsi;
