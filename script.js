const addBtn=document.getElementsByClassName("cardbtn")
const cardTitle=document.getElementsByClassName("card-title")
const cardText=document.getElementsByClassName("card-text")
const cardImage=document.getElementsByClassName("card-img")
const tabel =document.getElementById("table-basket")
const cardId=document.getElementsByClassName("card-id")
const basketLength=document.getElementById("basket-item")
const basket=JSON.parse(localStorage.getItem("basket")) || [];;
for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", () => {
        let count=1
        id=cardId[i].innerHTML
        title=cardTitle[i].innerHTML
        text=cardText[i].innerHTML;
        img=cardImage[i].getAttribute("src");

        let testcard= basket.find((card) => card.id === id);
        if(testcard!==undefined){
            testcard.count++;
        }
        else{
            add={
                id:id,
                title:title,
                text:text,
                img:img,
                count:count
            }
            basket.push(add)
        }
        
        localStorage.setItem("basket", JSON.stringify(basket));
        console.log(basket); 
        basketCount(basket)
        renderUI(basket);
       
}   
    )}

   function renderUI(array){
    let html="";
    for(let i=0;i<array.length;i++){
        html+=`
        <tr>
        <th scope="row">${i}</th>
        <td><img  src="${array[i].img}" class="" alt="..."></td>  
        <td>${array[i].title}</td>
        <td>${array[i].count}</td>
        </tr>
        `
    }
    tabel.innerHTML=html;
    basketCount(basket)
   }
   function basketCount(array) {
    let len=array.length;
    basketLength.innerHTML=`${len}`
   }
   basketCount(basket)
    renderUI(basket)
    
    
