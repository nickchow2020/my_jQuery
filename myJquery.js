class MyJQuery {
  constructor(element){
    if(element === window || element === document){
      this.element = element
    }else{
      this.element = document.querySelectorAll(element)
    }
  }

  html(content){
    this.element.forEach(dom => dom.innerHTML = content)
    return this
  }

  hide(){
    this.element.forEach(dom => {
      dom.preDisplayStyle = dom.style.display
      dom.style.display = "none"
    })
    return this
  }

  show(){
    this.element.forEach(dom => dom.style.display = dom.preDisplayStyle)
    return this
  }

  on(eventType,callback){
    this.element.forEach(dom => {
      dom.addEventListener(eventType,callback)
    })
    return this
  }

  add(selector){
    const targetElements = document.querySelectorAll(selector)
    this.element = [...this.element,...targetElements]
    return this
  }

  css(property,value){
    this.element.forEach(dom => {
      dom.style[property] = value
    })

    return this
  }

  addClass(className){
    this.element.forEach(dom => {
      dom.className = dom.className + " " + className
    })

    return this
  }

  attr(data){

    if(typeof data === "string"){
      let attribute = ""
      if(data.indexOf(" ") === -1){
        this.element.forEach(dom => {
          attribute = dom.getAttribute(data)}
          )
      return attribute

      }else{
        const [attr,value] = data.split(" ")
        this.element.forEach(dom => dom.setAttribute(attr,value))
      }
    }

    if(typeof data === "object"){
      for(let key of Object.keys(data)){
        this.element.forEach(dom => dom.setAttribute(key,data[key]))
      }
    }

    return this
  }
}

const $$ = function(selector){
  return new MyJQuery(selector)
}

$$(".title").add("[data-button]").add(".btn").css("background-color","tomato")
$$(".something").addClass("hello,world").attr("title good").attr({"img":"http","alt":"good"})








