import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BsCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'

// component
import Pagination from '../../../components/Pagination'
import FormInput from '../../../components/form/FormInput'

// hooks
import useConfirmationDialog from '../../../hooks/useConfirmationDialog'
import usePageTitle from '../../../hooks/usePageTitle'
import useRedux from '../../../hooks/useRedux'
import useToggle from '../../../hooks/useToggle'
import useLoader from '../../../hooks/useLoader'

// actions
import { dialogConfig } from '../../../redux/actions'

// api
import { RestService } from '../../../rest/RestService'

const Users = () => {

    // page title
    usePageTitle({
        title: 'Users'
    })

    const navigate = useNavigate()
    const { getConfirmation } = useConfirmationDialog()
    const [isOpen, toggle] = useToggle()
    const { loader } = useLoader()
    const { dispatch } = useRedux()

    const [userData, setUserData] = useState()
    const [searchUser, setSearchUser] = useState({
        name: '',
        email: '',
        gender: '',
        status: ''
    })

    const [totalRecords, setTotalrecords] = useState(0)
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const FetchData = async () => {
            loader(true)
            let res = await RestService.users()
            loader(false)
            if (res) {
                setUserData(res.data)
                let totalPageCount = Math.ceil(res.headers['x-pagination-total'] / res.headers['x-pagination-limit'])
                setPageCount(totalPageCount)
                setTotalrecords(parseInt(res.headers['x-pagination-total']))
            }
        }
        FetchData()
    }, [loader])

    // handle status
    const handleStatus = async (user) => {
        if (user.status === 'active') {
            user.status = 'inactive'
        } else {
            user.status = 'active'
        }

        let id = user.id
        let body = {
            id,
            name: user.name,
            email: user.email,
            gender: user.gender,
            status: user.status
        }
        let res = await RestService.updateUser(body)
        if (res) {
            let index = userData.findIndex(function (e) { return e.id === id })
            userData[index].status = body.status
            setUserData([...userData])
        }
    }

    // handle search user
    const handleSearchUser = (e) => {
        setSearchUser({ ...searchUser, [e.target.name]: e.target.value })
    }

    // handle edit user
    const handleEditUser = (user) => {
        let id = user.id
        navigate(`/settings/users/edit-user/${id}`)
    }

    // handle pagination
    const handlePagination = async (page) => {
        let body = {
            name: searchUser.name,
            email: searchUser.email,
            gender: searchUser.gender,
            status: searchUser.status
        }
        let res = await RestService.users({ body, page })
        if (res) {
            setUserData(res.data)
            let totalPageCount = parseInt(Math.ceil(res.headers['x-pagination-total'] / res.headers['x-pagination-limit']))
            setPageCount(totalPageCount)
            setCurrentPage(page)
            setTotalrecords(parseInt(res.headers['x-pagination-total']))
        }
    }

    // handle delete user
    const deleteConfirmationDialog = async (user) => {
        const confirmed = await getConfirmation({
            body: {
                hasHeader: {
                    header: 'Are you sure you want to delete?',
                    cancleButton: true
                },
                hasFooter: {
                    confirmButton: true,
                    cancleButton: true,
                    confirmButtonText: 'Yes',
                    cancleButtonText: 'No'
                }
            }
        })

        if (confirmed) {
            let id = user.id
            let body = { id }
            let res = await RestService.deleteUser(body)
            if (res) {
                let index = userData.findIndex(function (e) { return e.id === id })
                userData.splice(index, 1)
                setUserData([...userData])
                setTotalrecords(totalRecords - 1)
                dispatch(dialogConfig({}))
            }
        }
    }

    return (
        <>
            <div className='d-flex justify-content-end mb-3'>
                <Button className='me-1' onClick={toggle}>
                    Search
                </Button>
                <Link to='add-user' className='btn btn-primary'>
                    Add User
                </Link>
            </div>
            <Table striped bordered responsive size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData && totalRecords !== 0 ? (
                        <>
                            {(userData || []).map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>
                                            <Link to={`user-detail/${user.id}`} className='text-secondary'>
                                                {user.name}
                                            </Link>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            {user.status === 'active' ? (
                                                <BsCircleFill
                                                    className='cursor-pointer'
                                                    style={{ fill: '#0acf97' }}
                                                    onClick={() => handleStatus(user)}
                                                />
                                            ) : (
                                                <BsCircleFill
                                                    className='cursor-pointer'
                                                    style={{ fill: '#fa5c7c' }}
                                                    onClick={() => handleStatus(user)}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            <div className='d-flex'>
                                                <Button
                                                    color='danger'
                                                    size='sm'
                                                    outline
                                                    onClick={() => deleteConfirmationDialog(user)}
                                                    className='me-1'
                                                >
                                                    <AiFillDelete />
                                                </Button>
                                                <Button
                                                    color='success'
                                                    size='sm'
                                                    outline
                                                    onClick={() => handleEditUser(user)}
                                                >
                                                    <AiFillEdit />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </>
                    ) : (
                        <tr>
                            <td colSpan={6}>
                                <h3 className='text-center'>No Records Found</h3>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className='d-flex justify-content-between'>
                {totalRecords !== 0 &&
                    <div className='d-none d-lg-block'>
                        <h4>Total Records: {totalRecords}</h4>
                    </div>
                }
                <Pagination
                    className='pagination-bar'
                    currentPage={currentPage}
                    totalCount={pageCount}
                    onPageChange={(page) => handlePagination(page)}
                    siblingCount={1}
                />
            </div>
            {isOpen &&
                <Modal centered isOpen={isOpen}>
                    <ModalHeader toggle={toggle}>
                        Search Data
                    </ModalHeader>
                    <ModalBody>
                        <FormInput
                            label='Name'
                            type='text'
                            name='name'
                            value={searchUser.name}
                            showFeedback={false}
                            onChange={handleSearchUser}
                        />
                        <FormInput
                            label='Email ID'
                            type='email'
                            name='email'
                            value={searchUser.email}
                            showFeedback={false}
                            onChange={handleSearchUser}
                        />
                        <FormInput
                            label='Gender'
                            type='select'
                            name='gender'
                            value={searchUser.gender}
                            showFeedback={false}
                            onChange={handleSearchUser}
                        >
                            <option>--Select Gender--</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </FormInput>
                        <FormInput
                            label='Status'
                            type='select'
                            name='status'
                            value={searchUser.status}
                            showFeedback={false}
                            onChange={handleSearchUser}
                        >
                            <option>--Select Status--</option>
                            <option value='active'>Active</option>
                            <option value='inactive'>Inactive</option>
                        </FormInput>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={() => { handlePagination(1); toggle() }}>
                            Search
                        </Button>
                    </ModalFooter>
                </Modal>
            }
        </>
    )
}

export default Users