//$(document).ready(()=>{

   // $("#submit").click(()=>{
      //  let userInput = $("#submit").val()
       // alert(userInput)
      //  $.ajax({
       //     url:'https://api.giphy.com/v1/gifs/search?api_key=jhyk57hl0jKssBmDmNkgTtRpQN2KXtDN&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

        //})
     //  .done((res)=>{
      //      console.log("res", res)

         //   let imagesResult = res.Search 
        //    $.each(imagesResult, (i,e)=>{}
        //    )
    //   })
 //   })

   

//})



async function fetchPictures() {
    let userElement = document.getElementById("search");
    let userInput = userElement.value
    let response = await fetch ('https://api.giphy.com/v1/gifs/search?api_key=jhyk57hl0jKssBmDmNkgTtRpQN2KXtDN&q=sun&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips')
    let jsonGiphy = await (response.json())
    //console.log (jsonGiphy.data)
    let arraData = await (jsonGiphy.data)

    let resultPictures = document.getElementById("images");

    for(let index = 0 ; index < arraData.length; index++){
        let img = document.createElement ("img");
        img.src = arraData[index].images.original.url;
        resultPictures.append(img);
        console.log(arraData[index].images.original.url);

    }
}

    



fetchPictures()