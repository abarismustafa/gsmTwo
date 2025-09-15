

import { useState } from "react";

const dummyData = [
    {
        state: "Bihar",
        districts: [
            {
                district: "Patna",
                blocks: [
                    {
                        block: "Block A",
                        wards: [
                            { ward: "Ward 1", gsm: "John Doe", photo: "/assets/newimage/di.jpg" },
                            { ward: "Ward 2", gsm: "Jane Smith", photo: "/assets/newimage/d2.jpg" },
                        ],
                    },
                    {
                        block: "Block B",
                        wards: [
                            { ward: "Ward 3", gsm: "Alice Brown", photo: "/assets/newimage/di.jpg" },
                        ],
                    },
                ],
            },
            {
                district: "Gaya",
                blocks: [
                    {
                        block: "Block C",
                        wards: [
                            { ward: "Ward 4", gsm: "Bob White", photo: "/assets/newimage/d2.jpg" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        state: "Jharkhand",
        districts: [
            {
                district: "Ranchi",
                blocks: [
                    {
                        block: "Block D",
                        wards: [
                            { ward: "Ward 5", gsm: "Charlie Green", photo: "/assets/newimage/di.jpg" },
                        ],
                    },
                ],
            },
        ],
    },
];

const Directory = () => {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedBlock, setSelectedBlock] = useState("");
    const [wards, setWards] = useState([]);

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setSelectedDistrict("");
        setSelectedBlock("");
        setWards([]);
    };

    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        setSelectedBlock("");
        setWards([]);
    };

    const handleBlockChange = (e) => {
        const block = e.target.value;
        setSelectedBlock(block);
        const stateObj = dummyData.find((s) => s.state === selectedState);
        const districtObj = stateObj?.districts.find((d) => d.district === selectedDistrict);
        const blockObj = districtObj?.blocks.find((b) => b.block === block);
        setWards(blockObj?.wards || []);
    };

    const selectedStateObj = dummyData.find((s) => s.state === selectedState);
    const districts = selectedStateObj?.districts || [];
    const blocks = selectedStateObj?.districts
        .find((d) => d.district === selectedDistrict)
        ?.blocks || [];

    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center">GSM Directory</h2>

            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={selectedState}
                        onChange={handleStateChange}
                    >
                        <option value="">Select State</option>
                        {dummyData.map((state) => (
                            <option key={state.state} value={state.state}>
                                {state.state}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        disabled={!selectedState}
                    >
                        <option value="">Select District</option>
                        {districts.map((d) => (
                            <option key={d.district} value={d.district}>
                                {d.district}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={selectedBlock}
                        onChange={handleBlockChange}
                        disabled={!selectedDistrict}
                    >
                        <option value="">Select Block</option>
                        {blocks.map((b) => (
                            <option key={b.block} value={b.block}>
                                {b.block}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row">
                {wards.map((ward) => (
                    <div key={ward.ward} className="col-md-4 mb-3">
                        <div className="card h-100">
                            <img
                                src={ward.photo}
                                className="card-img-top"
                                alt={ward.gsm}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{ward.gsm}</h5>
                                <p className="card-text">{ward.ward}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {wards.length === 0 && selectedBlock && (
                <p className="text-center mt-4">No GSM found in this block.</p>
            )}
        </div>
    );
};

export default Directory;
