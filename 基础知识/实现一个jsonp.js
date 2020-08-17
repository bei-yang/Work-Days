function jsonp (url) {
  const script = document.createElement('script')
  script.src = url
  script.type = 'text/javascript'
  document.body.appendChild(script)
}


function jsonp (url) {
  const script = document.createElement('script')
  script.src = url
  script.type = 'text/javascript'
  document.body.appendChild(script)
}


function parent(){

}

function child(){
  new parent.call(this)
}

