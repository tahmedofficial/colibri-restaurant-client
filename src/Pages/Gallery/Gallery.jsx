import { useContext, useState } from "react";
import titleImg from "../../assets/images/titleBg.jpg";
import Modal from "../Modal/Modal";
import { Navigate, useLocation } from "react-router-dom";
import { Rating } from "flowbite-react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const Gallery = () => {

    const { user, feedbackData } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [manageUser, setManageUser] = useState(false);
    const location = useLocation();
    console.log(feedbackData);

    const handleModal = () => {
        setManageUser(true);
        setShowModal(true);
    }

    return (
        <div>
            <Helmet>
                <title>Colibri | Gallery</title>
            </Helmet>
            <div className="relative flex justify-center items-center">
                <div className="bg-primary_bg_color w-full">
                    <img className="w-full md:h-48 lg:h-80 pt-10 mix-blend-multiply" src={titleImg} alt="" />
                </div>
                <div className="absolute text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">Gallery</h1>
                    <h3 className="text-center md:text-lg mt-2"><span className="text-yellow-400">Home</span> | Gallery</h3>
                </div>
            </div>

            <div className="md:w-4/6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
                    {
                        feedbackData.map(myFeedback => <div key={myFeedback._id}>
                            <div className="relative group">
                                <div>
                                    <img className="rounded-lg" src={myFeedback.imageUrl} />
                                </div>
                                <div className="absolute flex flex-col items-center text-white top-0 px-5 pt-10 pb-5 bg-black bg-opacity-75 h-full rounded-lg opacity-0 hover:opacity-100 duration-500">
                                    <h1 className="text-3xl">{myFeedback.name}</h1>
                                    <h3>{myFeedback.feedback}</h3>
                                    <Rating className="mt-5" size="md">
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star filled={false} />
                                    </Rating>
                                </div>
                            </div>

                        </div>)
                    }
                </div>

                <div className="mt-20 text-center">
                    <button onClick={handleModal} className="bg-primary_btn_color px-10 h-10 rounded-lg text-lg font-medium text-white hover:bg-primary_color duration-300">Add Feedback</button>
                </div>
            </div>
            {
                manageUser ?
                    <div>
                        {
                            user ?
                                <div>
                                    {showModal ? <Modal onClose={() => setShowModal(false)}></Modal> : undefined}
                                </div>
                                : <Navigate to="/login" state={location.pathname}></Navigate>
                        }
                    </div> : undefined
            }

        </div>
    );
};

export default Gallery;