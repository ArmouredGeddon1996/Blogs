import axios from 'axios';

export default axios.create({
	baseURL: 'http://id.ngrok.io'
});