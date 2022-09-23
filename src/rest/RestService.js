// api base url
import API from './api';

class Restservice {

    // users
    async users(data) {
        try {
            let pageQuerey = ''
            if (data) {
                if (data.page) {
                    pageQuerey = `?page=${data.page}&name=${data.body.name}&email=${data.body.email}&gender=${data.body.gender}&status=${data.body.status}`
                }
            }
            let response = await API.get('users' + pageQuerey)
            return response
        } catch (e) { }
    }

    // get user detail
    async userDetails(data) {
        try {
            let response = await API.get('users/' + data.userID.id)
            return response
        } catch (e) { }
    }

    // add user
    async addUser(data) {
        try {
            let response = await API.post('users', data)
            return response
        } catch (e) { }
    }

    // delete user
    async deleteUser(data) {
        try {
            let response = await API.delete('users/' + data.id)
            return response
        } catch (e) { }
    }

    // update user detail
    async updateUser(data) {
        try {
            let response = await API.patch('users/' + data.id, data)
            return response
        } catch (e) { }
    }

    // posts
    async posts(data) {
        try {
            let pageQuerey = ''
            if (data) {
                if (data.page) {
                    pageQuerey = `?page=${data.page}&user_id=${data.body.user_id}&title=${data.body.title}&body=${data.body.body}`
                }
            }
            let response = await API.get('posts' + pageQuerey)
            return response
        } catch (e) { }
    }

    // get user detail
    async postDetails(data) {
        try {
            let response = await API.get('posts/' + data.postId.id)
            return response
        } catch (e) { }
    }

    // add user
    async addPost(data) {
        try {
            let response = await API.post('users/' + data.user + '/posts', data)
            return response
        } catch (e) { }
    }

    // delete post
    async deletePosts(data) {
        try {
            let response = await API.delete('posts/' + data.id)
            return response
        } catch (e) { }
    }

    // update post detail
    async updatePost(data) {
        try {
            let response = await API.patch('posts/' + data.id, data)
            return response
        } catch (e) { }
    }
}

export let RestService = new Restservice();
