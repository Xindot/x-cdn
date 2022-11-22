
// base64图片转file对象
function base64ImgtoFileObj() {
  const src = (document.querySelector('img') || {}).src || ''
  fetch(src).then(async res => {
    const blob = await res.blob()
    const file = new File([blob], 'name')
    console.log(file)
  })
  // 
}