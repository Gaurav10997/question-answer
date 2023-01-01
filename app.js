const questionBtn = document.querySelectorAll(".question-btn")
questionBtn.forEach(function(btn){
    console.log(btn)
    btn.addEventListener("click",function(e){
        let btntarget = e.currentTarget.parentElement.parentElement
        btntarget.classList.toggle("show-text")
    
    })
})

