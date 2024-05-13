import axios from "axios";
import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyOrderedFood = () => {

    const { user, sweetMessage } = useContext(AuthContext);
    const [orderedData, setOrderedData] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch(`https://colibri-restaurant-server.vercel.app/foodOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrderedData(data);
            })

    }, [user, reload])

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure you want to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://colibri-restaurant-server.vercel.app/foodOrder/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            setReload(!reload)
                            sweetMessage("Successfully Delete")
                        }
                    })
            }
        });

    }

    return (
        <div className="md:w-5/6 mx-auto mt-16">
            <Helmet>
                <title>Colibri | My Ordered Food</title>
            </Helmet>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>Food</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>Time</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            orderedData.map(myOrder =>
                                <Table.Row key={myOrder._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <img className="h-16 w-20 rounded-xl" src={myOrder.image} alt="" />
                                    </Table.Cell>
                                    <Table.Cell>{myOrder.foodName}</Table.Cell>
                                    <Table.Cell>{myOrder.name}</Table.Cell>
                                    <Table.Cell>{myOrder.myDate}</Table.Cell>
                                    <Table.Cell>{myOrder.time}</Table.Cell>
                                    <Table.Cell>${myOrder.price}</Table.Cell>
                                    <Table.Cell>
                                        <button onClick={() => handleDelete(myOrder._id)} className="text-xl bg-primary_btn_color text-white p-2 rounded-lg hover:bg-primary_color duration-300"><MdDelete /></button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Colibri Restaurant
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default MyOrderedFood;