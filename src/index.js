	
	import './skin.scss';
	
	const loadData = (url, resType, method = 'GET') => {
		fetch(url, {
			method: method
		})
		.then(function (response) {
				return response.json();
		})
		.then(function (data) {
			console.log(data);
		});
	}

	const init = () => {
		loadData('/get/userdata');
	}

	document.body.addEventListener('load', init(), false);

