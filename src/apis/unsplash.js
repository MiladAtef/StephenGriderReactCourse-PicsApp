import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 759e31d5d734ebb681d1ad03811263a5f18a15d96f921acc0fae69a30f5b8d58'
	}
});
