import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";


const Modal = ({ onClose }) => {

    const { user, sweetMessage, setControl, control } = useContext(AuthContext);
    const modalRef = useRef();

    const closeModal = (event) => {
        if (modalRef.current === event.target) {
            onClose();
        }
    }

    const handleFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const imageUrl = form.imageUrl.value;
        const feedback = form.feedback.value;
        const data = { imageUrl, feedback, name, email };
        console.log(data);

        axios.post("https://colibri-restaurant-server.vercel.app/feedback", data)
            .then(res => {
                if (res.data.insertedId) {
                    form.reset();
                    setControl(!control);
                    onClose();
                    sweetMessage("Feedback submited");
                }
            })
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5 text-white">
                <button onClick={onClose} className="place-self-end text-2xl p-1 rounded-lg hover:bg-primary_color duration-300"><MdClose /></button>
                <div className="bg-primary_color rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
                    <h1 className="text-2xl md:text-3xl font-semibold">Share your experience</h1>
                    <h3 className="text-lg">{user?.displayName}</h3>
                    <form onSubmit={handleFeedback} className="flex flex-col gap-3">
                        <input className="md:w-96 border-0 rounded-lg text-black" type="text" name="imageUrl" placeholder="Enter image url" required />
                        <textarea className="md:w-96 h-20 border-0 rounded-lg text-black" name="feedback" placeholder="Enter your experience" required></textarea>
                        <button className="bg-primary_btn_color px-10 py-2 mt-4 text-white rounded-lg hover:opacity-65 duration-300">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func
}