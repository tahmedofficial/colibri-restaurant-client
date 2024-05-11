import { Table } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";
import { MdEdit } from "react-icons/md";


const MyAddedFood = () => {

    const myFoodItems = useLoaderData();

    return (
        <div className="md:w-5/6 mx-auto mt-16">
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Origin</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Update</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            myFoodItems.map(myFood =>
                                <Table.Row key={myFood._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        <img className="h-16 w-20 rounded-xl" src={myFood.image} alt="" />
                                    </Table.Cell>
                                    <Table.Cell>{myFood.foodName}</Table.Cell>
                                    <Table.Cell>{myFood.foodCategory}</Table.Cell>
                                    <Table.Cell>{myFood.foodOrigin}</Table.Cell>
                                    <Table.Cell>{myFood.price}</Table.Cell>
                                    <Table.Cell>
                                        <Link to={`/updatePage/${myFood._id}`}>
                                            <button className="text-xl bg-primary_btn_color text-white p-2 rounded-lg hover:bg-primary_color duration-300"><MdEdit /></button>
                                        </Link>
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

export default MyAddedFood;