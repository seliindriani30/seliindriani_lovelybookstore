document.querySelectorAll('.btnDetail').forEach(item => {
item.addEventListener('click', (e) =>{
    let gabar = document.querySelector('.card-img-top').src;
    console.log('gambar: ${gambar}');
});
});
    
