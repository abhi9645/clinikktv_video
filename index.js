const uploadForm = document.getElementById('upload')
uploadForm.addEventListener('submit', function(e) {
    console.log("Hello world")
    console.log(e)
   e.preventDefault()
   let file = e.target.uploadFile.files[0]
   let formData = new FormData()
   formData.append('video', file)
   fetch('http://localhost:3000/uploadVideo', {
      method: 'POST',
      body: formData
   })
   .then(resp => resp.json())
   .then(data => {
      if (data.errors) {
         alert(data.errors)
      }
      else {
         console.log(data)
      }
   })
})