import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'

// components
import Pagination from '../../../components/Pagination'
import FormInput from '../../../components/form/FormInput'

// hooks
import usePageTitle from '../../../hooks/usePageTitle'
import useConfirmationDialog from '../../../hooks/useConfirmationDialog'
import useToggle from '../../../hooks/useToggle'
import useLoader from '../../../hooks/useLoader'
import useRedux from '../../../hooks/useRedux'

// actions
import { dialogConfig } from '../../../redux/actions'

// api
import { RestService } from '../../../rest/RestService'

const Posts = () => {

    // page title
    usePageTitle({
        title: 'Posts'
    })

    const navigate = useNavigate()
    const { getConfirmation } = useConfirmationDialog()
    const [isOpen, toggle] = useToggle()
    const { loader } = useLoader()
    const { dispatch } = useRedux()

    const [postsData, setPostsData] = useState()
    const [searchPosts, setSearchPosts] = useState({
        id: '',
        user_id: '',
        title: '',
        body: ''
    })

    const [totalRecords, setTotalrecords] = useState(0)
    const [pageCount, setPageCount] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const FetchData = async () => {
            loader(true)
            let res = await RestService.posts()
            loader(false)
            if (res) {
                setPostsData(res.data)
                let totalPageCount = Math.ceil(res.headers['x-pagination-total'] / res.headers['x-pagination-limit'])
                setPageCount(totalPageCount)
                setTotalrecords(parseInt(res.headers['x-pagination-total']))
            }
        }
        FetchData()
    }, [loader])

    // handle search posts
    const handleSearchPosts = (e) => {
        setSearchPosts({ ...searchPosts, [e.target.name]: e.target.value })
    }

    // handle edit posts
    const handleEditPosts = (post) => {
        let id = post.id
        navigate(`/settings/posts/edit-post/${id}`)
    }

    // handle pagination
    const handlePagination = async (page) => {
        let body = {
            user_id: searchPosts.user_id,
            title: searchPosts.title,
            body: searchPosts.body
        }
        let res = await RestService.posts({ body, page })
        if (res) {
            setPostsData(res.data)
            let totalPageCount = parseInt(Math.ceil(res.headers['x-pagination-total'] / res.headers['x-pagination-limit']))
            setPageCount(totalPageCount)
            setCurrentPage(page)
            setTotalrecords(parseInt(res.headers['x-pagination-total']))
        }
    }

    // handle delete posts
    const deleteConfirmationDialog = async (post) => {
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
            let id = post.id
            let body = { id }
            let res = await RestService.deletePosts(body)
            if (res) {
                let index = postsData.findIndex(function (e) { return e.id === id })
                postsData.splice(index, 1)
                setPostsData([...postsData])
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
                <Link to='add-post' className='btn btn-primary'>
                    Add Posts
                </Link>
            </div>
            <Table striped bordered responsive size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {postsData && totalRecords !== 0 ? (
                        <>
                            {(postsData || []).map((post, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{post.id}</td>
                                        <td>{post.user_id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Button
                                                    color='danger'
                                                    size='sm'
                                                    outline
                                                    onClick={() => deleteConfirmationDialog(post)}
                                                    className='me-1'
                                                >
                                                    <AiFillDelete />
                                                </Button>
                                                <Button
                                                    color='success'
                                                    size='sm'
                                                    outline
                                                    onClick={() => handleEditPosts(post)}
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
                            label='User ID'
                            type='text'
                            name='user_id'
                            value={searchPosts.user_id}
                            showFeedback={false}
                            onChange={handleSearchPosts}
                        />
                        <FormInput
                            label='Title'
                            type='text'
                            name='title'
                            value={searchPosts.title}
                            showFeedback={false}
                            onChange={handleSearchPosts}
                        />
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

export default Posts