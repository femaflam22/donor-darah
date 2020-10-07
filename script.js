let tombol = document.querySelector('#buttonSubmit');
let nama = document.querySelector('#nama');
let jk = document.querySelector('#jk');
let umur = document.querySelector('#umur');
let goldar = document.querySelector('#goldar');
let tanggal = document.querySelector('#tanggal');
let email = document.querySelector('#email');
let telp = document.querySelector('#telp');

	const validate = () => {
		if(nama.value != '' && jk.value != '' && umur.value != '' && goldar.value != '' && tanggal.value != '' && email.value != '' && telp.value != ''){
			alert('Syarat&Ketentuan serta prosedur dikirimkan ke email anda');
			const clear = () => {
				nama.value = '';
				jk.value = '';
				umur.value = '';
				goldar.value = '';
				tanggal.value = '';
				email.value = '';
				telp.value = '';
			}
		}
		else {
			alert('data tidak boleh ada yang kosong, silahkan dilengkapi');
		}

    }
    

